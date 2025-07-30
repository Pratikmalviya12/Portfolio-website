// src/hooks/useScrollToTop.ts
import { useCallback } from 'react';

/**
 * Hook that provides scroll utilities for single-page applications
 */
export const useScrollToTop = () => {
  const scrollToTop = useCallback((smooth: boolean = true) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string, smooth: boolean = true) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start'
      });
    }
  }, []);

  return { scrollToTop, scrollToSection };
};
