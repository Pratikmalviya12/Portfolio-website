import React, { useState, useEffect } from 'react';
import { prefersReducedMotion } from '../../utils';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  startDelay?: number;
  showCursor?: boolean;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 80,
  className = '',
  onComplete,
  startDelay = 0,
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, show text immediately
    if (prefersReducedMotion()) {
      setDisplayText(text);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    // Initial start delay only happens once
    if (!hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      
      return () => clearTimeout(startTimeout);
    }

    // After start delay, handle character typing with speed interval
    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (hasStarted && currentIndex >= text.length && !isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, speed, onComplete, startDelay, isComplete, hasStarted]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="terminal-cursor ml-1 w-2 h-5 inline-block">
          |
        </span>
      )}
    </span>
  );
};
