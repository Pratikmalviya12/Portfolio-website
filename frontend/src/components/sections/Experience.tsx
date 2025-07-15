import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experienceData, type Experience } from '../../data';

interface ExperienceProps {
  experiences?: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences: propExperiences }) => {
  // Use props experiences if provided, otherwise use data from JSON
  const experiences = propExperiences || experienceData.experiences;
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
    <motion.div
      variants={itemVariants}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-primary to-cyber-secondary opacity-50"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-cyber-neon rounded-full border-2 border-background-dark animate-pulse-neon"></div>
      
      {/* Content */}
      <div className="ml-16 cyberpunk-card group hover:scale-[1.02] transition-transform duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-cyber-primary group-hover:text-cyber-secondary transition-colors">
              {experience.position}
            </h3>
            <div className="flex items-center mt-2">
              {experience.companyUrl ? (
                <a 
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-cyber-secondary hover:text-cyber-neon transition-colors inline-flex items-center"
                >
                  {experience.company}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              ) : (
                <span className="text-lg font-semibold text-cyber-secondary">
                  {experience.company}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 text-sm text-gray-400">
            <div className="flex items-center mb-1">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="font-mono">
                {experience.startDate} - {experience.endDate || 'Present'}
              </span>
            </div>
            {experience.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-cyber-secondary mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs bg-cyber-neon/20 text-cyber-neon rounded border border-cyber-neon/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-cyber-secondary mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, achievementIndex) => (
                <li
                  key={achievementIndex}
                  className="text-sm text-gray-300 flex items-start"
                >
                  <span className="text-cyber-primary mr-2 mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 glitch-text" data-text="Experience">
              Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
              />
            ))}
          </motion.div>

          {/* Career Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 cyberpunk-card text-center"
          >
            <h3 className="text-2xl font-semibold text-cyber-primary mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always excited to take on new projects and collaborate with innovative teams. 
              Let's build something amazing together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
