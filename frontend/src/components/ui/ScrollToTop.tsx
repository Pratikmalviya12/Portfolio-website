// src/components/ui/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  smooth?: boolean;
}

/**
 * Component that scrolls to top when the route changes
 * This ensures users always start at the top of a new page
 * 
 * @param smooth - Whether to use smooth scrolling (default: true)
 */
export const ScrollToTop: React.FC<ScrollToTopProps> = ({ smooth = true }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, [pathname, smooth]);

  return null;
};
