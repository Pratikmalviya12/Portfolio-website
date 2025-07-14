import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <Github className="w-5 h-5" />
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: <Twitter className="w-5 h-5" />
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: <Mail className="w-5 h-5" />
  }
];

export const Footer: React.FC = () => {
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
    <footer className="relative py-12 border-t border-cyber-neon/20">
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
                  className="p-3 rounded-full bg-background-card border border-cyber-neon/30 text-cyber-neon hover:text-cyber-primary hover:border-cyber-primary hover:shadow-lg hover:shadow-cyber-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit my ${link.platform}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyber-neon transition-colors duration-300 font-mono"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="w-full h-px bg-gradient-to-r from-transparent via-cyber-neon/50 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-400 text-sm font-mono flex items-center justify-center gap-2">
              <span>&copy; {currentYear} Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-cyber-primary animate-pulse" />
              <span>by Developer</span>
            </p>
            <p className="text-gray-500 text-xs mt-2 font-mono">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 mx-auto block cyberpunk-button text-sm py-2 px-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to Top
          </motion.button>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyber-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyber-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </footer>
  );
};
