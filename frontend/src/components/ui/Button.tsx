// src/components/ui/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  href,
  target,
  rel
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-primary-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';
  
  const variantClasses = {
    primary: 'bg-accent-blue-600 text-white border-2 border-accent-blue-600 hover:bg-accent-blue-700 hover:border-accent-blue-700 hover:shadow-lg hover:shadow-accent-blue-500/25 hover:-translate-y-0.5',
    secondary: 'bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100 border-2 border-primary-200 dark:border-primary-600 hover:bg-primary-200 dark:hover:bg-primary-600 hover:border-primary-300 dark:hover:border-primary-500',
    outline: 'border-2 border-accent-blue-600 text-accent-blue-600 dark:text-accent-blue-400 bg-transparent hover:bg-accent-blue-600 hover:text-white dark:hover:text-white',
    ghost: 'text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 border-2 border-transparent hover:border-primary-200 dark:hover:border-primary-600'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {loading && (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        aria-disabled={disabled}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
};
