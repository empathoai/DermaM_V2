import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './MethodProcess.module.css';

export default function MethodProcess() {
  const { sectionReveal, cardStaggerContainer, cardReveal, viewportConfig } = useMotionSystem();

  const steps = [
    {
      num: '01',
      title: 'Evaluación',
      desc: 'Escuchamos tus objetivos y analizamos tus necesidades.'
    },
    {
      num: '02',
      title: 'Plan Personalizado',
      desc: 'Diseñamos un protocolo adaptado a tu piel, cuerpo o proceso.'
    },
    {
      num: '03',
      title: 'Tratamiento',
      desc: 'Aplicamos técnicas profesionales con productos y tecnología seleccionada.'
    },
    {
      num: '04',
      title: 'Seguimiento',
      desc: 'Te acompañamos para cuidar la evolución de tus resultados.'
    }
  ];

  return (
    <section className={styles.section} aria-label="Nuestro método y proceso clínico">
      <div className={styles.container}>
        
        {/* Part 1: Editorial Row */}
        <motion.div 
          className={styles.editorialRow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={sectionReveal}
        >
          <div className={styles.textContent}>
            <p className={styles.eyebrow}>Nuestro Método</p>
            <div className={styles.eyebrowLine}></div>
            <h2 className={styles.headline}>
              Así es nuestro<br />método.
            </h2>
            <p className={styles.bodyCopy}>
              Un proceso clínico, personalizado y consciente para resultados reales y sostenibles.
            </p>
          </div>
          <div className={styles.mediaContent} style={{ overflow: 'hidden' }}>
            <motion.img 
              src="/assets/images/home/method.jpg" 
              alt="" 
              className={styles.mediaImage} 
              loading="lazy" 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
        </motion.div>

        {/* Part 2: Process Timeline */}
        <div className={styles.timelineArea}>
          <div className={styles.track}></div>
          <div className={styles.mobileTrack}></div>
          
          <motion.div 
            className={styles.stepsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={cardStaggerContainer}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className={styles.step}
                variants={cardReveal}
              >
                <div className={styles.markerContainer}>
                  <div className={styles.circle}>{step.num}</div>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
