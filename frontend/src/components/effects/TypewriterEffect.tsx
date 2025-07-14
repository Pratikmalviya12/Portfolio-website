// src/components/effects/TypewriterEffect.tsx
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
  speed = 100,
  className = '',
  onComplete,
  startDelay = 0,
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, show text immediately
    if (prefersReducedMotion()) {
      setDisplayText(text);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else if (!isComplete) {
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, speed, onComplete, startDelay, isComplete]);

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
