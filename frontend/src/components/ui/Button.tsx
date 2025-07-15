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
  const baseClasses = 'inline-flex items-center justify-center font-mono font-medium uppercase tracking-wider transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-background-dark disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-cyber-primary text-black border-2 border-cyber-primary hover:bg-cyber-secondary hover:border-cyber-secondary hover:-translate-y-1',
    secondary: 'bg-cyber-secondary text-black border-2 border-cyber-secondary hover:bg-cyber-accent hover:border-cyber-accent',
    outline: 'border-2 border-cyber-primary text-cyber-primary bg-transparent hover:bg-cyber-primary hover:text-black',
    ghost: 'text-cyber-primary hover:bg-cyber-primary/10 border-2 border-transparent hover:border-cyber-primary/30'
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
        <div className="cyber-spinner mr-2" />
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
