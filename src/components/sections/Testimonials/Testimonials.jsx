import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { sectionReveal, cardStaggerContainer, cardReveal, viewportConfig } = useMotionSystem();

  const testimonials = [
    {
      id: 1,
      quote: 'Excelente servicio, calidad en sus productos y amabilidad que encanta. En mi rostro he recobrado elasticidad y brillo.',
      name: 'KATHERINE BURGOS VALDEZ'
    },
    {
      id: 2,
      quote: 'Súper profesional, muy amable y honesta. Me explicó cómo sería el proceso y siempre contestó mis preguntas.',
      name: 'KATHERINE BURGOS VALDEZ'
    },
    {
      id: 3,
      quote: 'Me realicé un tratamiento facial para el acné. Nancy sabe lo que está haciendo y lo hace con cuidado.',
      name: 'MIRASOL FERNÁNDEZ'
    }
  ];

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
              Nuestros<br />clientes
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
            {testimonials.map((test) => (
              <motion.div 
                key={test.id} 
                className={styles.card}
                variants={cardReveal}
              >
                <div className={styles.quoteIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8H6C6 5.79086 7.79086 4 10 4V2C6.68629 2 4 4.68629 4 8V16H10V8Z" fill="currentColor"/>
                    <path d="M20 8H16C16 5.79086 17.7908 4 20 4V2C16.6863 2 14 4.68629 14 8V16H20V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <blockquote className={styles.quote}>
                  {test.quote}
                </blockquote>
                <div className={styles.cardDivider}></div>
                <div className={styles.starsWrapper} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.star}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.star}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.star}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.star}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.star}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <cite className={styles.clientName}>{test.name}</cite>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
