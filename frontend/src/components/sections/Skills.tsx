import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData, portfolioData, type Skill } from '../../data';
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiPython, 
  SiFastapi, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3
} from 'react-icons/si';
import { FaDatabase, FaCode, FaRocket, FaPalette, FaChartLine, FaCogs, FaTools } from 'react-icons/fa';

// Tech stack icon component with official icons
const TechIcon: React.FC<{ skillName: string; className?: string }> = ({ skillName, className = "" }) => {
  const getIconComponent = (name: string) => {
    const iconName = name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    
    // Map technology names to official icons
    const iconMap: { [key: string]: JSX.Element } = {
      'typescript': <SiTypescript className={`w-8 h-8 sm:w-10 sm:h-10 text-blue-600 ${className}`} />,
      'javascript': <SiJavascript className={`w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 ${className}`} />,
      'react': <SiReact className={`w-8 h-8 sm:w-10 sm:h-10 text-cyan-500 ${className}`} />,
      'python': <SiPython className={`w-8 h-8 sm:w-10 sm:h-10 text-blue-500 ${className}`} />,
      'fastapi': <SiFastapi className={`w-8 h-8 sm:w-10 sm:h-10 text-green-600 ${className}`} />,
      'tailwindcss': <SiTailwindcss className={`w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 ${className}`} />,
      'html': <SiHtml5 className={`w-8 h-8 sm:w-10 sm:h-10 text-orange-600 ${className}`} />,
      'css': <SiCss3 className={`w-8 h-8 sm:w-10 sm:h-10 text-blue-600 ${className}`} />,
      'sql': <FaDatabase className={`w-8 h-8 sm:w-10 sm:h-10 text-gray-600 ${className}`} />,
      'zustand': (
        <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${className}`}>
          <span className="text-xl sm:text-2xl">🐻</span>
        </div>
      ),
      'objectorientedprogramming': <FaCogs className={`w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 ${className}`} />,
      'fullstackdevelopment': <FaRocket className={`w-8 h-8 sm:w-10 sm:h-10 text-green-500 ${className}`} />,
      'webapplicationoptimization': <FaChartLine className={`w-8 h-8 sm:w-10 sm:h-10 text-orange-500 ${className}`} />,
      'uiuxenhancement': <FaPalette className={`w-8 h-8 sm:w-10 sm:h-10 text-pink-500 ${className}`} />,
      'debuggingandtroubleshooting': <FaTools className={`w-8 h-8 sm:w-10 sm:h-10 text-red-500 ${className}`} />,
      'apiperformanceoptimization': <FaChartLine className={`w-8 h-8 sm:w-10 sm:h-10 text-blue-500 ${className}`} />,
      'databasequeryoptimization': <FaDatabase className={`w-8 h-8 sm:w-10 sm:h-10 text-gray-700 ${className}`} />,
    };

    return iconMap[iconName] || <FaCode className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-500 ${className}`} />;
  };

  return (
    <div className="flex items-center justify-center p-3 rounded-full bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 hover:border-accent-blue-400 dark:hover:border-accent-blue-500 transition-all duration-300 shadow-lg">
      {getIconComponent(skillName)}
    </div>
  );
};

interface SkillsProps {
  skills?: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills: propSkills }) => {
  // Use props skills if provided, otherwise use data from JSON
  const skills = propSkills || skillsData.skills;
  const [forceVisible, setForceVisible] = useState(false);

  // Fallback to ensure content is visible after timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Get unique categories for organization
  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      variants={itemVariants}
      className="group bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 hover:border-accent-blue-400 dark:hover:border-accent-blue-500 p-3 w-24 sm:w-28 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue-500/20 motion-safe-fallback"
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
          <TechIcon skillName={skill.name} />
        </div>
        <span className="font-semibold text-primary-700 dark:text-primary-200 text-xs sm:text-sm group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-5 relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={forceVisible ? { opacity: 1, y: 0 } : {}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-50 mb-3" data-text={portfolioData.sections.skills.title}>
            {portfolioData.sections.skills.title}
          </h2>
          <p className="text-base md:text-lg text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
            {portfolioData.sections.skills.subtitle}
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-blue-500 to-accent-purple-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={forceVisible ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ 
            once: false, 
            amount: 0.05,
            margin: "0px 0px -50px 0px" 
          }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 motion-safe-fallback"
        >
          {skills.map((skill) => (
            <SkillBar key={skill.id} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
