import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary font-mono mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-4">
            Md Sajid Hossain Khan.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-secondary mb-8">
            I build things for the web.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            I'm a Software Engineer and Computer Science student passionate about creating
            user-friendly applications and solving complex problems through code.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/Sajid069"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-text-secondary hover:text-secondary transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/md-sajid-hossain-khan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-text-secondary hover:text-secondary transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 