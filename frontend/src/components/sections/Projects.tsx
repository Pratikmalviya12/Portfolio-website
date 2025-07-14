import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';
  featured?: boolean;
  year: number;
}

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React and Node.js',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    category: 'fullstack',
    featured: true,
    year: 2024,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    longDescription: 'A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
    category: 'fullstack',
    featured: true,
    year: 2024,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts',
    longDescription: 'A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps with beautiful visualizations.',
    technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
    category: 'frontend',
    year: 2023,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'API Gateway',
    description: 'Microservices API gateway with rate limiting',
    longDescription: 'A robust API gateway service that handles routing, authentication, rate limiting, and monitoring for microservices architecture.',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT'],
    category: 'backend',
    year: 2023,
    githubUrl: '#'
  }
];

export const Projects: React.FC<ProjectsProps> = ({ projects = defaultProjects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div
      variants={itemVariants}
      className="cyberpunk-card group cursor-pointer h-full"
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => setSelectedProject(project)}
    >
      {project.imageUrl && (
        <div className="w-full h-48 bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-4xl opacity-50">🖼️</span>
        </div>
      )}
      
      <div className="space-y-4">
        {project.featured && (
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-cyber-primary text-white rounded-full">
            Featured
          </span>
        )}
        
        <h3 className="text-xl font-semibold text-cyber-primary group-hover:text-cyber-secondary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-cyber-neon/20 text-cyber-neon rounded border border-cyber-neon/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-cyber-neon/20">
          <span className="text-sm text-cyber-secondary font-mono">{project.year}</span>
          <div className="flex space-x-2">
            {project.demoUrl && (
              <ExternalLink className="w-4 h-4 text-cyber-neon hover:text-cyber-primary transition-colors" />
            )}
            {project.githubUrl && (
              <Github className="w-4 h-4 text-cyber-neon hover:text-cyber-primary transition-colors" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <section id="projects" className="py-20 relative">
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
              <h2 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 glitch-text" data-text="Projects">
                Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A showcase of my work and technical capabilities
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyber-primary text-white shadow-lg shadow-cyber-primary/50'
                      : 'bg-background-card text-gray-300 hover:bg-cyber-neon/20 hover:text-cyber-neon'
                  }`}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
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
              className="cyberpunk-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-cyber-primary">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {selectedProject.longDescription && (
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-cyber-secondary mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-cyber-neon/20 text-cyber-neon rounded border border-cyber-neon/30"
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
                      className="cyberpunk-button inline-flex items-center"
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
                      className="cyberpunk-button bg-transparent hover:bg-cyber-neon/10 inline-flex items-center"
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
