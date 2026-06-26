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
            {testimonials.map((test) => (
              <motion.div 
                key={test.id} 
                className={styles.card}
                variants={cardReveal}
              >
                <blockquote className={styles.quote}>
                  {test.quote}
                </blockquote>
                <div className={styles.cardDivider}></div>
                <cite className={styles.clientName}>{test.name}</cite>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
