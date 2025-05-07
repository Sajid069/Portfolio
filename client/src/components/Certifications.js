import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University & DeepLearning.AI',
      date: '2023',
      description: 'Comprehensive course covering machine learning algorithms, neural networks, and deep learning concepts.',
    },
    {
      title: 'Mobile App Development',
      issuer: 'EDGE Project, Bangladesh Computer Council',
      date: '2023',
      description: 'Training in Android, Flutter, and iOS development under the EDGE Project.',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">
                      {cert.title}
                    </h3>
                    <p className="text-text-primary">{cert.issuer}</p>
                  </div>
                  <p className="text-text-secondary text-sm mt-2 md:mt-0">
                    {cert.date}
                  </p>
                </div>
                <p className="text-text-secondary">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 