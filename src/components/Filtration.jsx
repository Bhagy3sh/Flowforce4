import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup } from 'react-icons/fa';
import './Filtration.css';

const Filtration = () => {
  const layers = [
    {
      number: '01',
      title: 'Gravel / Pebbles',
      subtitle: 'Primary Filtration',
      points: [
        'Removes large suspended particles',
        'Traps mud, leaves, and visible dirt',
        'Slows water flow for better filtering'
      ],
      tag: 'Physical Filtration'
    },
    {
      number: '02',
      title: 'Sand',
      subtitle: 'Fine Particle Removal',
      points: [
        'Filters smaller dirt particles',
        'Removes turbidity (cloudiness)',
        'Improves clarity of water'
      ],
      tag: 'Mechanical Filtration'
    },
    {
      number: '03',
      title: 'Charcoal / Activated Carbon',
      subtitle: 'Chemical Filtration',
      points: [
        'Absorbs bad odor and color',
        'Removes chemicals and organic impurities',
        'Improves taste and appearance'
      ],
      tag: 'Chemical Purification'
    },
    {
      number: '04',
      title: 'Cotton / Filter Cloth',
      subtitle: 'Final Polishing',
      points: [
        'Captures very tiny remaining particles',
        'Acts as the final safety filter',
        'Produces visibly cleaner output water'
      ],
      tag: 'Polishing Filtration'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="filtration">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2>4-Layer Filtration System</h2>
          <div className="divider"></div>
          <p className="section-description">
            Each layer removes different types of impurities, working together to produce cleaner water
          </p>
        </div>

        <motion.div 
          className="filtration-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              className="filter-layer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="layer-icon">
                <FaLayerGroup />
                <span className="layer-number">{layer.number}</span>
              </div>
              <h3>{layer.title}</h3>
              <p className="layer-subtitle">{layer.subtitle}</p>
              <ul>
                {layer.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="layer-tag">{layer.tag}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Filtration;
