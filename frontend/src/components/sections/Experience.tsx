import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experienceData, portfolioData, type Experience } from '../../data';

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
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue-500 to-accent-purple-500 opacity-50"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-4 top-6 w-3 h-3 bg-accent-blue-500 rounded-full border-2 border-white dark:border-primary-800"></div>
      
      {/* Content */}
      <div className="ml-14 border-none group hover:scale-[1.01] transition-transform duration-300 bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
          <div>
            <h3 className="text-base font-bold text-primary-900 dark:text-primary-50 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors">
              {experience.position}
            </h3>
            <div className="flex items-center mt-1">
              {experience.companyUrl ? (
                <a 
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary-700 dark:text-primary-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors inline-flex items-center"
                >
                  {experience.company}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              ) : (
                <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                  {experience.company}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end mt-1 md:mt-0 text-xs text-primary-600 dark:text-primary-400">
            <div className="flex items-center mb-1">
              <Calendar className="w-3 h-3 mr-1" />
              <span className="font-mono">
                {experience.startDate} - {experience.endDate || 'Present'}
              </span>
            </div>
            {experience.location && (
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-primary-700 dark:text-primary-300 mb-3 leading-relaxed text-sm">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-0.5 text-xs bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200 rounded border border-primary-200 dark:border-primary-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, achievementIndex) => (
                <li
                  key={achievementIndex}
                  className="text-xs text-primary-700 dark:text-primary-300 flex items-start"
                >
                  <span className="text-accent-blue-600 dark:text-accent-blue-400 mr-2 mt-0.5">▸</span>
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
    <section id="experience" className="py-5 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto motion-safe-fallback"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-50 mb-3" data-text={portfolioData.sections.experience.title}>
              {portfolioData.sections.experience.title}
            </h2>
            <p className="text-sm md:text-base text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              {portfolioData.sections.experience.subtitle}
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent-blue-500 to-accent-purple-500 mx-auto mt-3 rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="space-y-12 motion-safe-fallback"
          >
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
