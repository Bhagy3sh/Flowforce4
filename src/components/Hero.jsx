import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="glitch" 
          data-text="River Cleaning Boat"
          animate={{ 
            textShadow: [
              '0 0 0px rgba(255,255,255,0)',
              '2px 2px 8px rgba(255,255,255,0.5)',
              '0 0 0px rgba(255,255,255,0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          River Cleaning Boat
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          with 4-Layer Filtration System
        </motion.p>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Transforming polluted waters into cleaner rivers through innovative engineering
        </motion.p>
        <motion.button
          className="cta-button"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Discover More</span>
          <FaArrowDown />
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ 
          opacity: showScroll ? 1 : 0,
          y: showScroll ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mouse">
          <motion.div 
            className="wheel"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
