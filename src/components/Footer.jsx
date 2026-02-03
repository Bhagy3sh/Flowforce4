import React from 'react';
import { motion } from 'framer-motion';
import { FaWater, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <FaWater />
            <h3>Flowforce 4</h3>
            <p>Engineering a cleaner tomorrow</p>
          </div>
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <motion.a 
              href="mailto:kartiknerd09@gmail.com" 
              className="email-link"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              kartiknerd09@gmail.com
            </motion.a>
            <p className="footer-name">Kartik</p>
          </div>
        </motion.div>
        <div className="footer-bottom">
          <p>&copy; 2026 Flowforce 4. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
