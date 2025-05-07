import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'BreakByte',
      period: 'Feb 2025–Present',
      description: [
        'Working on web applications using MERN stack',
        'Collaborating with senior developers',
        'Using Git for version control',
      ],
    },
    {
      title: 'Industrial Attachment',
      company: 'Kolpolok Limited',
      period: 'Dec 2024–Jan 2025',
      description: [
        'Developed frontend for Symplex VPN landing page using HTML, CSS, Bootstrap',
        'Managed code integration via Git',
      ],
    },
    {
      title: 'Instructor',
      company: 'Tangail Cadet and Academic School',
      period: 'Jul 2019–Present',
      description: [
        'Tutoring 50+ students in Math, Physics, Chemistry, and ICT',
        'Developing and implementing effective teaching strategies',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            Work Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary" />
                <div className="bg-primary p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">
                        {exp.title}
                      </h3>
                      <p className="text-text-primary">{exp.company}</p>
                    </div>
                    <p className="text-text-secondary text-sm mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 