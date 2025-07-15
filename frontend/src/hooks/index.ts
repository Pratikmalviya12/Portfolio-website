// src/hooks/index.ts

import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce, throttle, prefersReducedMotion } from '../utils';

/**
 * Hook for managing component visibility based on intersection observer
 */
export const useIntersectionObserver = (
  threshold = 0.1,
  rootMargin = '0px'
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        
        if (isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasBeenVisible]);

  return { elementRef, isVisible, hasBeenVisible };
};

/**
 * Hook for tracking scroll position
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = throttle(() => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    }, 16); // ~60fps

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return { scrollPosition, scrollDirection };
};

/**
 * Hook for managing window size
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 150);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * Hook for typewriter effect
 */
export const useTypewriter = (
  text: string,
  speed = 100,
  startDelay = 0
) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplayText(text);
      setIsComplete(true);
      setIsStarted(true);
      return;
    }

    const startTimeout = setTimeout(() => {
      setIsStarted(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return { displayText, isComplete, isStarted };
};

/**
 * Hook for managing cyberpunk theme
 */
export const useCyberpunkTheme = () => {
  const [theme, setTheme] = useState<'cyberpunk' | 'minimal'>('cyberpunk');
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    highContrastQuery.addListener(handleContrastChange);
    return () => highContrastQuery.removeListener(handleContrastChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'cyberpunk' ? 'minimal' : 'cyberpunk');
  }, []);

  return { theme, isHighContrast, toggleTheme };
};

/**
 * Hook for managing local storage with cyberpunk theme
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
};

/**
 * Hook for mouse position tracking
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 16);

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

/**
 * Hook for preloading images
 */
export const useImagePreloader = (imageUrls: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadedImages(prev => new Set([...prev, url]));
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.allSettled(imageUrls.map(preloadImage));
  }, [imageUrls]);

  return { loadedImages, loadingProgress, isComplete: loadingProgress === 100 };
};

/**
 * Hook for managing animation states
 */
export const useAnimationControls = () => {
  const [shouldAnimate, setShouldAnimate] = useState(!prefersReducedMotion());
  const [animationSpeed, setAnimationSpeed] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      setShouldAnimate(!mediaQuery.matches);
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleAnimations = useCallback(() => {
    setShouldAnimate(prev => !prev);
  }, []);

  const adjustSpeed = useCallback((speed: number) => {
    setAnimationSpeed(Math.max(0.1, Math.min(3, speed)));
  }, []);

  return {
    shouldAnimate,
    animationSpeed,
    toggleAnimations,
    adjustSpeed
  };
};

// Export scroll-to-top hook
export { useScrollToTop } from './useScrollToTop';
