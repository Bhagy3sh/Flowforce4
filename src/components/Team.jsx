import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
  const members = [
    {
      name: 'Kartik',
      role: 'Team Member',
      intro: 'Science Aficionado',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Robert',
    },
    {
      name: 'Shreya',
      role: 'Team Member',
      intro: 'Creative Thinker',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Aiden',
    },
    {
      name: 'Vanya',
      role: 'Team Member',
      intro: 'Innovation Enthusiast',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Riley',
    },
    {
      name: 'Shristi',
      role: 'Team Member',
      intro: 'Problem Solver',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Easton',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Team</span>
          <h2>Meet Flowforce 4</h2>
          <div className="divider"></div>
          <p className="section-description">
            A dedicated group of 11th graders passionate about environmental innovation
          </p>
        </div>

        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="team-img">
                <img 
                  src={member.avatar}
                  alt={member.name}
                />
                <div className="team-overlay">
                  <p>{member.role}</p>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="intro">{member.intro}</p>
              <p className="grade">Grade: 11th</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
