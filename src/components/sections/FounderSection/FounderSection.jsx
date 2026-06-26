import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './FounderSection.module.css';

export default function FounderSection() {
  const { sectionReveal, imageHover, viewportConfig } = useMotionSystem();

  return (
    <section className={styles.section} aria-labelledby="founder-heading">
      <div className={styles.container}>
        <div className={styles.layoutSplit}>
          
          {/* Left: Image Box */}
          <motion.div 
            className={styles.imageBlock}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={sectionReveal}
          >
            <div className={styles.imagePlaceholder} style={{ overflow: 'hidden' }}>
              <motion.img 
                src="/assets/images/home/founder.jpg" 
                alt="Nancy Nieto" 
                className={styles.image}
                loading="lazy"
                whileHover={imageHover}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            className={styles.textBlock}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={sectionReveal}
          >
            <div className={styles.headerArea}>
              <div className={styles.mobileLogoContainer}>
                <motion.img 
                  src="/assets/images/global/logo.png" 
                  alt="Derma.M" 
                  className={styles.mobileLogo}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <p className={styles.eyebrow}>FUNDADORA DE DERMA.M</p>
              <div className={styles.eyebrowLine}></div>
              <h2 id="founder-heading" className={styles.headline}>NANCY NIETO</h2>
              
              <div className={styles.introContent}>
                <p className={styles.subheadline}>
                  Especialista en estética facial con licencia aprobada por el Estado de Florida y Flebotomista Certificada en los Estados Unidos.
                </p>
                <p className={styles.bodyCopy}>
                  DERMA.M nació del sueño y la pasión de Nancy Nieto por el cuidado de la piel, el bienestar y el servicio a los demás. Su enfoque combina formación profesional, experiencia estética y una atención cercana para ayudar a cada persona a sentirse más segura, más feliz y más confiada en su piel.
                </p>
                <p className={styles.bodyCopy}>
                  Con formación en Cosmetología, Cosmiatría y Dermocosmiatría, Nancy continúa especializándose en tratamientos faciales avanzados, acné, manchas, cicatrices y rejuvenecimiento de la piel.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
