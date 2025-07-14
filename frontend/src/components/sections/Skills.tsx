import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

interface SkillsProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 85, category: 'Frontend', icon: '📘' },
  { name: 'Node.js', level: 80, category: 'Backend', icon: '🟢' },
  { name: 'Python', level: 75, category: 'Backend', icon: '🐍' },
  { name: 'AWS', level: 70, category: 'DevOps', icon: '☁️' },
  { name: 'Docker', level: 75, category: 'DevOps', icon: '🐳' },
  { name: 'PostgreSQL', level: 80, category: 'Database', icon: '🐘' },
  { name: 'MongoDB', level: 75, category: 'Database', icon: '🍃' },
];

export const Skills: React.FC<SkillsProps> = ({ skills = defaultSkills }) => {
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
      className="cyberpunk-card p-4"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          {skill.icon && <span className="text-2xl mr-3">{skill.icon}</span>}
          <span className="font-semibold text-cyber-primary">{skill.name}</span>
        </div>
        <span className="text-cyber-secondary font-mono">{skill.level}%</span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-cyber-primary to-cyber-secondary h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyber-neon/20 to-transparent rounded-full animate-pulse-neon" />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
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
                <h3 className="text-2xl font-semibold text-cyber-secondary mb-6 text-center">
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
