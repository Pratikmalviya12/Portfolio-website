import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { projectsData, portfolioData, type Project } from '../../data';

interface ProjectsProps {
  projects?: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects: propProjects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Use props projects if provided, otherwise use data from JSON
  const projects = propProjects || projectsData.projects;

  const categories = ['all', ...new Set(projects.map(p => p.category.toLowerCase()))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
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

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div
      className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 hover:border-accent-blue-400 dark:hover:border-accent-blue-500 group cursor-pointer w-full flex flex-col rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue-500/20 shadow-lg"
      onClick={() => setSelectedProject(project)}
    >
      {(project.images && project.images.length > 0) && (
        <div className="w-full h-32 bg-gradient-to-br from-primary-100 dark:from-primary-700 to-accent-blue-100 dark:to-accent-blue-800 rounded-lg mb-3 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl opacity-50">🖼️</span>
        </div>
      )}
      
      <div className="flex flex-col flex-grow space-y-3">
        {project.featured && (
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-accent-blue-600 text-white rounded-full w-fit">
            Featured
          </span>
        )}
        
        <h3 className="text-base font-semibold text-primary-900 dark:text-primary-50 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-primary-700 dark:text-primary-300 text-xs leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200 rounded border border-primary-200 dark:border-primary-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-primary-800 dark:bg-accent-blue-800 text-white dark:text-accent-blue-200 rounded border border-primary-800 dark:border-accent-blue-600">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-primary-200 dark:border-primary-600 mt-auto">
          <span className="text-sm text-primary-600 dark:text-primary-400 font-mono">{project.year}</span>
          <div className="flex space-x-2">
            {project.demoUrl && (
              <ExternalLink className="w-4 h-4 text-accent-blue-600 dark:text-accent-blue-400 hover:text-accent-blue-700 dark:hover:text-accent-blue-300 transition-colors" />
            )}
            {project.githubUrl && (
              <Github className="w-4 h-4 text-accent-blue-600 dark:text-accent-blue-400 hover:text-accent-blue-700 dark:hover:text-accent-blue-300 transition-colors" />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section id="projects" className="py-5 relative bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto motion-safe-fallback"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-50 mb-3" data-text={portfolioData.sections.projects.title}>
                {portfolioData.sections.projects.title}
              </h2>
              <p className="text-sm md:text-base text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
                {portfolioData.sections.projects.subtitle}
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-accent-blue-500 to-accent-purple-500 mx-auto mt-3 rounded-full"></div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {categories.map((category) => {
                const count = category === 'all' 
                  ? projects.length 
                  : projects.filter(p => p.category.toLowerCase() === category.toLowerCase()).length;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 border ${
                      selectedCategory === category
                        ? 'bg-accent-blue-600 text-white border-accent-blue-600 hover:bg-accent-blue-700'
                        : 'bg-white dark:bg-primary-800 text-primary-900 dark:text-primary-100 border-primary-300 dark:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-700 hover:border-accent-blue-400 dark:hover:border-accent-blue-500'
                    }`}
                  >
                    <Filter className="w-4 h-4 inline mr-2" />
                    {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
                  </button>
                );
              })}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ 
                once: false, 
                amount: 0.05,
                margin: "0px 0px -50px 0px" 
              }}
              className="flex flex-wrap justify-center gap-6 min-h-[300px] motion-safe-fallback"
            >
              <AnimatePresence>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <motion.div
                      key={`${selectedCategory}-${project.id}`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      layout
                      transition={{ duration: 0.3 }}
                      className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex"
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full text-center py-8"
                  >
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      No projects found in this category
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/95 dark:bg-primary-800/95 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-bold text-primary-900 dark:text-primary-50">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {selectedProject.longDescription && (
                  <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                )}

                <div>
                  <h4 className="text-base font-semibold text-primary-900 dark:text-primary-100 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200 rounded border border-primary-200 dark:border-primary-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-accent-blue-600 text-white rounded-lg hover:bg-accent-blue-700 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-transparent border-2 border-accent-blue-600 text-accent-blue-600 dark:text-accent-blue-400 rounded-lg hover:bg-accent-blue-600 hover:text-white transition-colors font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
