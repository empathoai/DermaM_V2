import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './TrustBar.module.css';

export default function TrustBar() {
  const { cardStaggerContainer, cardReveal, viewportConfig } = useMotionSystem();

  const items = [
    {
      title: "Profesionales Especialistas",
      microcopy: "Asesoría profesional para el cuidado de tu piel.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Productos de Primera Calidad",
      microcopy: "Protocolos seleccionados para rostro y cuerpo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 2v7.31"></path>
          <path d="M14 9.3V1.99"></path>
          <path d="M8.5 2h7"></path>
          <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
          <path d="M5.52 16h12.96"></path>
        </svg>
      ),
    },
    {
      title: "Aparatología Avanzada",
      microcopy: "Tecnología estética avanzada y segura.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: "Belleza Integral",
      microcopy: "Belleza, bienestar y cuidado personalizado.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 7.5a4.5 4.5 0 1 1 3 4.5H9a4.5 4.5 0 1 1 3-4.5Z"></path>
          <path d="m12 7.5 3-3"></path>
          <path d="m12 7.5-3-3"></path>
          <path d="m12 16.5 3 3"></path>
          <path d="m12 16.5-3 3"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.trustBar} aria-label="Valores de confianza">
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={cardStaggerContainer}
      >
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className={styles.item}
            variants={cardReveal}
          >
            <div className={styles.icon}>
              {item.icon}
            </div>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.microcopy}>{item.microcopy}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
