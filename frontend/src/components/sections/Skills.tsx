import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { skillsData, type Skill } from '../../data';

interface SkillsProps {
  skills?: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills: propSkills }) => {
  // Use props skills if provided, otherwise use data from JSON
  const skills = propSkills || skillsData.skills;
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const categories = [...new Set(skills.map(skill => skill.category))];

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      variants={itemVariants}
      className="cyberpunk-card p-4 sm:p-6 min-w-[250px] sm:min-w-[280px] max-w-[320px] flex-1 w-full sm:w-auto"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center flex-1 min-w-0">
          {skill.icon && <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 flex-shrink-0">{skill.icon}</span>}
          <span className="font-semibold text-cyber-primary text-base sm:text-lg truncate">{skill.name}</span>
        </div>
        <span className="text-cyber-secondary font-mono text-base sm:text-lg font-bold ml-2 flex-shrink-0">{skill.level}%</span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-cyber-primary to-cyber-secondary h-full rounded-full relative"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-2.5 sm:h-3 bg-gradient-to-r from-cyber-neon/10 to-transparent rounded-full" />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 glitch-text" data-text="Skills">
              Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My technical expertise across various domains
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div
                key={category}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-cyber-secondary mb-6 sm:mb-8 text-center">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overall Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <Card
              title="Technical Proficiency"
              content="Continuously learning and adapting to new technologies"
              className="text-center max-w-2xl mx-auto"
              variant="cyberpunk"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
