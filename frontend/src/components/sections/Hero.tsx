// src/components/sections/Hero.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../effects/TypewriterEffect";
import { Button } from "../ui/Button";
import { useIntersectionObserver, useSmoothScroll } from "../../hooks";
import { portfolioData } from "../../data";

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name = portfolioData.personal.name,
  title = portfolioData.personal.title,
  description = portfolioData.personal.description,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { elementRef } = useIntersectionObserver();
  const { scrollToElement } = useSmoothScroll();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    scrollToElement("projects", {
      duration: 1000,
      offset: 80,
    });
  };

  const scrollToContact = () => {
    scrollToElement("contact", {
      duration: 1000,
      offset: 80,
    });
  };

  return (
    <section
      ref={elementRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-transparent"
    >
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* ASCII Art Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-mono text-accent-blue-600 dark:text-accent-blue-400 text-xs md:text-sm leading-tight mb-8"
          >
          </motion.div>

          {/* Name with glitch effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-primary-50 mb-6"
            data-text={name}
          >
            {name}
          </motion.h1>

          {/* Title with typewriter effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl lg:text-3xl text-primary-700 dark:text-primary-200 font-mono mb-6"
          >
            <TypewriterEffect
              text={title}
              speed={100}
              startDelay={600}
              className=""
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-base md:text-lg text-primary-600 dark:text-primary-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToProjects}
              variant="primary"
              size="md"
              className="group"
            >
              <span>View Projects</span>
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>

            <Button onClick={scrollToContact} variant="outline" size="md">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
