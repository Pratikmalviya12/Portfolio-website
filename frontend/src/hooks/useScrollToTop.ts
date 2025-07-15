// src/hooks/useScrollToTop.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that automatically scrolls to top when route changes
 * 
 * @param smooth - Whether to use smooth scrolling (default: true)
 * @param enabled - Whether the scroll-to-top is enabled (default: true)
 */
export const useScrollToTop = (smooth: boolean = true, enabled: boolean = true) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!enabled) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, [pathname, smooth, enabled]);
};
