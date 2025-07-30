import React from 'react';
import { motion } from 'framer-motion';
import { User, Download } from 'lucide-react';
import { portfolioData } from '../../data';

interface AboutProps {
  name?: string;
  title?: string;
  description?: string;
  resumeUrl?: string;
}

export const About: React.FC<AboutProps> = ({
  name: propName,
  title: propTitle,
  description: propDescription,
  resumeUrl: propResumeUrl
}) => {
  // Use props or data from portfolio
  const name = propName || portfolioData.personal.name;
  const title = propTitle || portfolioData.personal.title;
  const description = propDescription || portfolioData.personal.bio;
  const resumeUrl = propResumeUrl || portfolioData.personal.resume || "#";
  const stats = portfolioData.stats;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-5 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto motion-safe-fallback"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-50 mb-3" data-text={portfolioData.sections.about.title}>
              {portfolioData.sections.about.title}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent-blue-500 to-accent-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <User className="w-5 h-5 text-accent-blue-600 dark:text-accent-blue-400 mr-2" />
                  <h3 className="text-base font-semibold text-primary-900 dark:text-primary-50">Personal Info</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-primary-700 dark:text-primary-300 text-sm">
                    <span className="font-mono text-primary-600 dark:text-primary-400 mr-2 min-w-[3rem]">Name:</span>
                    <span>{name}</span>
                  </div>
                  
                  <div className="flex items-center text-primary-700 dark:text-primary-300 text-sm">
                    <span className="font-mono text-primary-600 dark:text-primary-400 mr-2 min-w-[3rem]">Role:</span>
                    <span>{title}</span>
                  </div>
                </div>

                <motion.a
                  href={resumeUrl}
                  download
                  className="bg-accent-blue-600 text-white border-2 border-accent-blue-600 hover:bg-accent-blue-700 hover:border-accent-blue-700 inline-flex items-center mt-5 w-full justify-center px-4 py-3 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </motion.a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg text-center p-3 shadow-lg">
                  <div className="text-lg font-bold text-accent-blue-600 dark:text-accent-blue-400 font-mono">{stats.yearsExperience}</div>
                  <div className="text-xs text-primary-600 dark:text-primary-400 mt-1">Years Experience</div>
                </div>
                <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg text-center p-3 shadow-lg">
                  <div className="text-lg font-bold text-accent-blue-600 dark:text-accent-blue-400 font-mono">{stats.projectsCompleted}</div>
                  <div className="text-xs text-primary-600 dark:text-primary-400 mt-1">Projects Completed</div>
                </div>
                <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg text-center p-3 shadow-lg">
                  <div className="text-lg font-bold text-accent-blue-600 dark:text-accent-blue-400 font-mono">{stats.clientSatisfaction}</div>
                  <div className="text-xs text-primary-600 dark:text-primary-400 mt-1">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg p-6 h-full shadow-lg">
                <h3 className="text-base font-semibold text-primary-900 dark:text-primary-50 mb-4">My Story</h3>
                <div className="space-y-3 text-primary-700 dark:text-primary-300 leading-relaxed">
                  <p className="text-sm">
                    {description}
                  </p>
                  
                  <p className="text-sm">
                    I specialize in building scalable web applications with modern technologies 
                    like React, TypeScript, Node.js, and cloud platforms. My passion lies in 
                    creating user-centric solutions that solve real-world problems.
                  </p>
                  
                  <p className="text-sm">
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
