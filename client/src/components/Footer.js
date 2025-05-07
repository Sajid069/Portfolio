import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/Sajid069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-secondary transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/md-sajid-hossain-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-secondary transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Md Sajid Hossain Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 