// src/hooks/useSmoothScroll.ts
import { useCallback } from 'react';

interface ScrollOptions {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
}

// Easing functions for smooth animations
const easeInOutQuart = (t: number): number => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
};

const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    elementId: string, 
    options: ScrollOptions = {}
  ) => {
    const {
      duration = 1000,
      offset = 80,
      easing = easeOutCubic
    } = options;

    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    const startPosition = window.pageYOffset;
    const elementRect = targetElement.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;
    const targetPosition = Math.max(0, elementTop - offset);
    const distance = targetPosition - startPosition;
    
    // If we're already at the target, don't animate
    if (Math.abs(distance) < 5) {
      return;
    }
    
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = easing(progress);
      const currentPosition = startPosition + (distance * easedProgress);
      
      window.scrollTo({
        top: currentPosition,
        behavior: 'auto' // Use 'auto' to avoid conflicts with CSS
      });
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToTop = useCallback((options: ScrollOptions = {}) => {
    const {
      duration = 600,
      easing = easeInOutQuart
    } = options;

    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = easing(progress);
      const currentPosition = startPosition * (1 - easedProgress);
      
      window.scrollTo({
        top: currentPosition,
        behavior: 'auto'
      });
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return { scrollToElement, scrollToTop };
};
