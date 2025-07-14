import React from 'react';
import { motion } from 'framer-motion';
import { User, Download, MapPin, Mail } from 'lucide-react';
import { Card } from '../ui/Card';

interface AboutProps {
  name?: string;
  title?: string;
  description?: string;
  email?: string;
  location?: string;
  resumeUrl?: string;
}

export const About: React.FC<AboutProps> = ({
  name = "Your Name",
  title = "Full Stack Developer",
  description = "Passionate developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.",
  email = "your.email@example.com",
  location = "Your City, Country",
  resumeUrl = "#"
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 glitch-text" data-text="About Me">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="cyberpunk-card">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-cyber-neon mr-3" />
                  <h3 className="text-2xl font-semibold text-cyber-primary">Personal Info</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <span className="font-mono text-cyber-secondary mr-2">Name:</span>
                    <span>{name}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <span className="font-mono text-cyber-secondary mr-2">Role:</span>
                    <span>{title}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 text-cyber-neon mr-2" />
                    <span className="font-mono text-cyber-secondary mr-2">Email:</span>
                    <a href={`mailto:${email}`} className="hover:text-cyber-neon transition-colors">
                      {email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 text-cyber-neon mr-2" />
                    <span className="font-mono text-cyber-secondary mr-2">Location:</span>
                    <span>{location}</span>
                  </div>
                </div>

                <motion.a
                  href={resumeUrl}
                  download
                  className="cyberpunk-button inline-flex items-center mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="cyberpunk-card">
                <h3 className="text-2xl font-semibold text-cyber-primary mb-4">My Story</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    {description}
                  </p>
                  
                  <p>
                    I specialize in building scalable web applications with modern technologies 
                    like React, TypeScript, Node.js, and cloud platforms. My passion lies in 
                    creating user-centric solutions that solve real-world problems.
                  </p>
                  
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card
                  title="3+"
                  content="Years Experience"
                  className="text-center p-4"
                  variant="cyberpunk"
                />
                <Card
                  title="50+"
                  content="Projects Completed"
                  className="text-center p-4"
                  variant="cyberpunk"
                />
                <Card
                  title="100%"
                  content="Client Satisfaction"
                  className="text-center p-4"
                  variant="cyberpunk"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
