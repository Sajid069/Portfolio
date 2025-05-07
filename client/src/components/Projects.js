import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Human Resource Management System',
      description: 'Built frontend with React.js, CSS, JavaScript, Next.js; MERN stack group project',
      technologies: ['React.js', 'Next.js', 'CSS', 'JavaScript', 'MERN Stack'],
      github: 'https://github.com/Sajid069/System_Design',
      image: '/images/hrms.png',
    },
    {
      title: 'Password Vault Manager',
      description: 'Python-based secure password management with encryption',
      technologies: ['Python', 'Encryption', 'SQLite'],
      github: 'https://github.com/Sajid069/Password-Manager',
      image: '/images/password-manager.png',
    },
    {
      title: 'E-commerce App',
      description: 'Cross-platform Flutter app for product browsing, cart management, secure checkout',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/Sajid069/e-commerce',
      image: '/images/ecommerce.png',
    },
    {
      title: 'Sentiment Analysis of Movie Reviews',
      description: 'Python and ML-based model for classifying movie review sentiments using NLP',
      technologies: ['Python', 'Machine Learning', 'NLP'],
      github: 'https://github.com/Sajid069/sentiment-analysis',
      image: '/images/sentiment.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-light rounded-lg overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-secondary border-2 border-secondary px-4 py-2 rounded hover:bg-secondary hover:text-primary transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-secondary transition-colors duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-primary-light rounded-lg max-w-2xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-text-secondary mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-text-secondary hover:text-secondary transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 