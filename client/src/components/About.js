import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      school: 'Chittagong University of Engineering and Technology',
      degree: 'BSc in Computer Science and Engineering',
      period: '2020–Present',
      details: 'CGPA: 3.42/4.00',
    },
    {
      school: 'Dhaka Residential Model College',
      degree: 'Higher Secondary Certificate',
      period: '2017–2019',
      details: 'GPA: 5.00/5.00',
    },
  ];

  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-text-secondary mb-6">
                I'm currently working as a Software Engineer at BreakByte, where I'm
                focused on building web applications using the MERN stack. My passion
                lies in creating efficient, user-friendly solutions that solve real-world
                problems.
              </p>
              <p className="text-text-secondary mb-6">
                As a Computer Science student at CUET, I've maintained a strong academic
                record while actively participating in various projects and competitions.
                I'm particularly interested in web development, machine learning, and
                mobile app development.
              </p>
              <p className="text-text-secondary">
                When I'm not coding, I enjoy teaching and mentoring students in various
                subjects, which has helped me develop strong communication and leadership
                skills.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary p-4 rounded-lg"
                  >
                    <h4 className="text-secondary font-medium">{edu.school}</h4>
                    <p className="text-text-primary">{edu.degree}</p>
                    <p className="text-text-secondary text-sm">{edu.period}</p>
                    <p className="text-text-secondary text-sm">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 