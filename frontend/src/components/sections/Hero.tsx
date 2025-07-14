// src/components/sections/Hero.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../effects/TypewriterEffect";
import { ParticleSystem } from "../effects/ParticleSystem";
import { Button } from "../ui/Button";
import { useIntersectionObserver } from "../../hooks";

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name = "Developer",
  title = "Full Stack Developer",
  description = "Crafting the future of web development with cutting-edge technologies and cyberpunk aesthetics.",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { elementRef } = useIntersectionObserver();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={elementRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <ParticleSystem />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Scan lines */}
      <div className="absolute inset-0 scanlines opacity-30" />

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
            className="font-mono text-cyber-neon text-xs md:text-sm leading-tight mb-8"
          >
            <pre className="whitespace-pre">Pratik Kumar Malviya</pre>
          </motion.div>

          {/* Name with glitch effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-cyber-primary glitch-text neon-glow mb-6"
            data-text={name}
          >
            {name}
          </motion.h1>

          {/* Title with typewriter effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-3xl lg:text-4xl text-cyber-secondary font-mono mb-6"
          >
            <TypewriterEffect
              text={title}
              speed={100}
              startDelay={1500}
              className="cyberpunk-text-glow"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {description}
          </motion.p>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center space-x-2 bg-background-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyber-green/30">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse-neon" />
              <span className="text-cyber-green font-mono text-sm">
                SYSTEM_ONLINE
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-background-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyber-neon/30">
              <div className="w-2 h-2 bg-cyber-neon rounded-full animate-pulse-neon" />
              <span className="text-cyber-neon font-mono text-sm">
                AVAILABLE_FOR_HIRE
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              onClick={scrollToProjects}
              variant="primary"
              size="lg"
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

            <Button onClick={scrollToContact} variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-cyber-neon"
            >
              <span className="text-sm font-mono mb-2">SCROLL_DOWN</span>
              <div className="w-px h-8 bg-cyber-neon opacity-50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
