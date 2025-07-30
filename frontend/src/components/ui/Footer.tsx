import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../../data';

const getIconForPlatform = (iconType: string) => {
  switch (iconType) {
    case 'github':
      return <Github className="w-5 h-5" />;
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />;
    case 'twitter':
      return <Twitter className="w-5 h-5" />;
    default:
      return <Mail className="w-5 h-5" />;
  }
};

export const Footer: React.FC = () => {
  const socialLinks = portfolioData.socialLinks;
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative py-12 border-t border-primary-200 dark:border-primary-700 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary-50 dark:bg-primary-800 border border-primary-200 dark:border-primary-700 text-accent-blue-600 dark:text-accent-blue-400 hover:text-white hover:bg-accent-blue-600 dark:hover:bg-accent-blue-500 hover:border-accent-blue-600 dark:hover:border-accent-blue-500 hover:shadow-lg hover:shadow-accent-blue-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit my ${link.platform}`}
                >
                  {getIconForPlatform(link.iconType)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="w-full h-px bg-gradient-to-r from-transparent via-primary-300 dark:via-primary-600 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-primary-700 dark:text-primary-300 text-sm font-mono flex items-center justify-center gap-2">
              <span>&copy; {currentYear} Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-accent-purple-500 dark:text-accent-purple-400 animate-pulse" />
              <span>by Developer</span>
            </p>
            <p className="text-primary-600 dark:text-primary-400 text-xs mt-2 font-mono">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent-blue-500/5 dark:bg-accent-blue-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent-purple-500/5 dark:bg-accent-purple-400/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </footer>
  );
};
