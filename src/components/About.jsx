import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaShip, FaTrash, FaCheck } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2>Innovative Water Purification</h2>
          <div className="divider"></div>
        </div>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="about-card" variants={cardVariants} whileHover={{ y: -10 }}>
            <div className="icon-box">
              <FaBullseye />
            </div>
            <h3>🎯 Objective</h3>
            <p>Water pollution is one of the biggest environmental challenges today. Our River Cleaning Boat demonstrates how polluted river water can be collected, filtered step-by-step, and converted into visibly cleaner water.</p>
            <ul className="objective-list">
              <li><FaCheck /> Remove floating waste from river surfaces</li>
              <li><FaCheck /> Filter polluted water using multiple filtration stages</li>
              <li><FaCheck /> Demonstrate how layered filtration improves water quality</li>
              <li><FaCheck /> Promote awareness about river pollution</li>
              <li><FaCheck /> Showcase a low-cost, eco-friendly cleaning method</li>
            </ul>
          </motion.div>

          <motion.div className="about-card" variants={cardVariants} whileHover={{ y: -10 }}>
            <div className="icon-box">
              <FaShip />
            </div>
            <h3>🚤 Boat Design</h3>
            <p>The boat acts as the core platform of the system, floating on the river surface with a motorized or manual mechanism.</p>
            <div className="feature-highlight">
              <strong>Dual Action System:</strong>
              <ul>
                <li>Collects solid waste from the surface</li>
                <li>Draws in dirty river water for filtration</li>
              </ul>
            </div>
          </motion.div>

          <motion.div className="about-card" variants={cardVariants} whileHover={{ y: -10 }}>
            <div className="icon-box">
              <FaTrash />
            </div>
            <h3>🗑️ Waste Collection</h3>
            <p>Before water enters the filtration layers, large debris is separated using nets or sieves. This prevents clogging of filters and allows easy disposal later.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
