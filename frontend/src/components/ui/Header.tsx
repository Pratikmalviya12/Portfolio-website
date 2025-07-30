import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useSmoothScroll } from '../../hooks';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { id: 'about', label: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
  { id: 'projects', label: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'experience', label: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollToElement } = useSmoothScroll();

  // Enhanced smooth scroll to section with animation
  const scrollToSection = (sectionId: string) => {
    // Use the enhanced smooth scroll hook with custom animation
    scrollToElement(sectionId, {
      duration: 800,
      offset: 80,
    });
    
    // Add a small delay before closing mobile menu for better UX
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position with improved detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120; // Offset for header
      
      // Find the section that's currently in view
      let currentSection = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          // Check if the section is in the viewport
          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            currentSection = sectionId;
          }
          
          // Special case for the last section
          if (sectionId === 'contact' && scrollPosition >= elementTop - 200) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
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
      animate="visible"        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-primary-900/90 backdrop-blur-md border-b border-primary-200/50 dark:border-primary-700/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary-800 dark:text-primary-100 font-mono cursor-pointer"
          >
            <span className="text-accent-blue-600 dark:text-accent-blue-400" data-text="&lt;Dev/&gt;">
              &lt;Dev/&gt;
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <motion.div key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                      activeSection === item.id
                        ? 'text-white bg-accent-blue-600 border border-accent-blue-600'
                        : 'text-primary-700 dark:text-primary-200 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 hover:bg-primary-50 dark:hover:bg-primary-800/50'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.div>
                  </button>
                </motion.div>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-700 dark:text-primary-200 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 hover:bg-primary-50 dark:hover:bg-primary-800/50 transition-colors p-2 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
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
            className="md:hidden fixed top-full left-0 right-0 bg-white/95 dark:bg-primary-900/95 backdrop-blur-md border-b border-primary-200/50 dark:border-primary-700/50"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium w-full text-left ${
                        activeSection === item.id
                          ? 'text-white bg-accent-blue-600 border border-accent-blue-600'
                          : 'text-primary-700 dark:text-primary-200 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 hover:bg-primary-50 dark:hover:bg-primary-800/50'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </motion.div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-blue-500 to-accent-purple-500 transition-all duration-300"
        style={{
          width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
        }}
      />
    </motion.header>
  );
};
