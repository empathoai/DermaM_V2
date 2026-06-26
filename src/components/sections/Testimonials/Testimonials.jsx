import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import { Star } from 'lucide-react';
import { aboutPage } from '../../../data/aboutPage';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { sectionReveal, cardStaggerContainer, cardReveal, viewportConfig } = useMotionSystem();

  const testimonials = aboutPage.testimonials;


  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        
        {/* Editoral Split Row */}
        <div className={styles.layoutSplit}>
          
          {/* Left: Heading Block */}
          <motion.div 
            className={styles.headingBlock}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={sectionReveal}
          >
            <p className={styles.eyebrow}>Lo que dicen</p>
            <div className={styles.eyebrowLine}></div>
            <h2 id="testimonials-heading" className={styles.headline}>
              Nuestros clientes
            </h2>
            <p className={styles.support}>
              Experiencias reales de personas que han confiado en Derma.M para cuidar su piel, su cuerpo y su bienestar.
            </p>
          </motion.div>

          {/* Right: Testimonial Cards */}
          <motion.div 
            className={styles.cardsArea}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={cardStaggerContainer}
          >
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx} 
                className={styles.card}
                variants={cardReveal}
              >
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={styles.starIcon} fill="currentColor" />
                  ))}
                </div>
                <blockquote className={styles.quote}>
                  {test.quote}
                </blockquote>
                <div className={styles.cardDivider}></div>
                <cite className={styles.clientName}>{test.author}</cite>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
