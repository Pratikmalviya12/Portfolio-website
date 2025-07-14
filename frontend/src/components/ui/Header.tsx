import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
  { id: 'about', label: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
  { id: 'projects', label: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'experience', label: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-dark/90 backdrop-blur-md border-b border-cyber-neon/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-cyber-primary font-mono cursor-pointer"
          >
            <span className="glitch-text" data-text="&lt;Dev/&gt;">
              &lt;Dev/&gt;
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.id);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-mono text-sm ${
                  activeSection === item.id
                    ? 'text-cyber-primary bg-cyber-neon/10 border border-cyber-neon/30'
                    : 'text-gray-300 hover:text-cyber-neon hover:bg-cyber-neon/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyber-neon hover:text-cyber-primary transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed top-full left-0 right-0 bg-background-dark/95 backdrop-blur-md border-b border-cyber-neon/20"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.id);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-mono ${
                      activeSection === item.id
                        ? 'text-cyber-primary bg-cyber-neon/10 border border-cyber-neon/30'
                        : 'text-gray-300 hover:text-cyber-neon hover:bg-cyber-neon/5'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyber-primary to-cyber-secondary transition-all duration-300"
        style={{
          width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
        }}
      />
    </motion.header>
  );
};
