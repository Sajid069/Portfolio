import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully!',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      text: '+8801985771527',
      link: 'tel:+8801985771527',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      text: 'mdsajidhossainkhan26@gmail.com',
      link: 'mailto:mdsajidhossainkhan26@gmail.com',
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      text: 'linkedin.com/in/md-sajid-hossain-khan',
      link: 'https://linkedin.com/in/md-sajid-hossain-khan',
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      text: 'github.com/Sajid069',
      link: 'https://github.com/Sajid069',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 text-text-secondary hover:text-secondary transition-colors duration-300"
                  >
                    {info.icon}
                    <span>{info.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-primary text-text-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-primary text-text-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-primary text-text-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="4"
                    className="w-full bg-primary text-text-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-secondary text-primary px-6 py-2 rounded hover:bg-opacity-90 transition-colors duration-300"
                >
                  Send Message
                </button>
                {status.message && (
                  <p
                    className={`mt-2 ${
                      status.type === 'success'
                        ? 'text-green-500'
                        : status.type === 'error'
                        ? 'text-red-500'
                        : 'text-text-secondary'
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 