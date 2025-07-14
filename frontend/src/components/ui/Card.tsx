// src/components/ui/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
  variant?: 'default' | 'cyberpunk' | 'minimal' | 'glass';
  onClick?: () => void;
  children?: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  icon,
  image,
  className = '',
  variant = 'cyberpunk',
  onClick,
  children,
  hover = true
}) => {
  const baseClasses = 'card transition-all duration-300 relative overflow-hidden';
  const variantClasses = {
    cyberpunk: 'cyberpunk-card hover:scale-105 hover:border-cyber-neon/60 hover:shadow-lg hover:shadow-cyber-neon/20',
    default: 'bg-white text-black border rounded-lg p-6 hover:shadow-md',
    minimal: 'bg-gray-800 border border-gray-600 rounded-lg p-6 hover:border-gray-400',
    glass: 'bg-background-card/50 backdrop-blur-md border border-cyber-neon/20 rounded-lg p-6 hover:bg-background-card/70'
  };

  const hoverProps = hover ? {
    whileHover: { scale: 1.02, y: -5 },
    whileTap: { scale: 0.98 }
  } : {};

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...hoverProps}
    >
      {/* Scan line effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-neon to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
          />
        </div>
      )}

      {icon && (
        <div className="mb-4 text-cyber-neon text-2xl">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-3 text-cyber-primary font-mono">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed mb-4">
        {content}
      </p>

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}

      {/* Holographic corner effect */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-full bg-gradient-to-br from-cyber-neon/30 to-transparent" />
      </div>
    </motion.div>
  );
};
