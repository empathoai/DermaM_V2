import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const { sectionReveal, viewportConfig } = useMotionSystem();
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_NUMBER || 'https://wa.link/z7i9vm';

  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.backgroundWrapper}>
        <motion.img 
          src="/assets/images/home/cta.jpg" 
          alt="" 
          className={styles.backgroundImage} 
          loading="lazy" 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.contentBlock}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={sectionReveal}
        >
          <p className={styles.eyebrow}>Reserva tu cita</p>
          <div className={styles.eyebrowLine}></div>
          <h2 id="cta-heading" className={styles.headline}>
            Empieza con una valoración personalizada
          </h2>
          <p className={styles.bodyCopy}>
            Agenda tu cita en Derma.M y recibe una orientación profesional según tu piel, tu cuerpo y tus objetivos.
          </p>
          
          <p className={styles.supportingInfo}>
            West Palm Beach / Miami &middot; <a href="tel:+15612535384" style={{ color: 'inherit', textDecoration: 'none' }}>561 253 5384</a>
          </p>

          <div className={styles.buttonGroup}>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              Reservar
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              WhatsApp
            </a>
          </div>

          <p className={styles.disclaimer}>
            La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
