import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaRecycle, FaRocket, FaCheckCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Demo.css';

const Demo = () => {
  const slides = [
    {
      image: '/details/4-Figure5-1.webp',
      title: 'Filtration System Design',
      description: 'Multi-layer filtration architecture'
    },
    {
      image: '/details/IMG-20251008-WA0005.webp',
      title: 'Working Model',
      description: 'Physical demonstration of the boat'
    },
    {
      image: '/details/River_Trash_Collector_Patent_US20060065586A1_Diagram.webp',
      title: 'Patent Reference',
      description: 'Technical inspiration and design'
    },
    {
      image: '/details/Screenshot_20251006_184753.webp',
      title: 'Detailed View',
      description: 'Component breakdown'
    }
  ];

  return (
    <section id="demo" className="demo">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Project</span>
          <h2>Visual Documentation</h2>
          <div className="divider"></div>
        </div>

        <motion.div 
          className="slider-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            loop={true}
            className="project-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slide">
                  <img src={slide.image} alt={slide.title} />
                  <div className="slide-info">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="impact-grid">
          <motion.div 
            className="impact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <FaRecycle />
            <h4>♻️ Environmental Impact</h4>
            <ul>
              <li>Reduces surface pollution</li>
              <li>Improves river water clarity</li>
              <li>Prevents plastics from traveling downstream</li>
              <li>Raises awareness about clean water technologies</li>
            </ul>
          </motion.div>

          <motion.div 
            className="impact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <FaRocket />
            <h4>🚀 Future Scope</h4>
            <ul>
              <li>Solar power integration for eco-friendly operation</li>
              <li>Sensors to monitor water quality in real-time</li>
              <li>Increased filtration capacity</li>
              <li>Automated navigation systems</li>
              <li>Real-time waste tracking</li>
            </ul>
          </motion.div>

          <motion.div 
            className="impact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <FaCheckCircle />
            <h4>✅ Key Achievement</h4>
            <p>
              This project demonstrates how polluted river water can be treated using simple engineering concepts. 
              By combining surface waste collection with multi-stage filtration, we show a clear path toward cleaner rivers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
