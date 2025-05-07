import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript', 'Dart'],
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'Bootstrap'],
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'Node.js', 'Express.js', 'Flutter'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'Tools',
      skills: ['Git'],
    },
    {
      title: 'Coursework',
      skills: ['Data Structures and Algorithms', 'Database Management System'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 