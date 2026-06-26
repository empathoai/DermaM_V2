import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './ClinicalPositioning.module.css';

export default function ClinicalPositioning() {
  const { sectionReveal, cardStaggerContainer, cardReveal, viewportConfig } = useMotionSystem();

  return (
    <section className={styles.section} aria-label="Nuestro enfoque y diferenciadores">
      
      {/* Part 1: Editorial Row (Dark Banner) */}
      <div className={styles.darkBanner}>
        <div className={styles.container}>
          <motion.div 
            className={styles.editorialRow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={sectionReveal}
          >
            <div className={styles.textContent}>
              <p className={styles.eyebrow}>Nuestro Enfoque</p>
              <div className={styles.eyebrowLine}></div>
              <h2 className={styles.headline}>
                Ciencia, experiencia y cuidado que se nota
              </h2>
              <p className={styles.bodyCopy}>
                En Derma.M combinamos conocimiento médico, tecnología avanzada y un enfoque humano para diseñar tratamientos que elevan tu bienestar y tu confianza.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Part 2: Differentiators */}
        <motion.div 
          className={styles.differentiatorRow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={cardStaggerContainer}
        >
          
          {/* Differentiator 01 */}
          <motion.div className={styles.column} variants={cardReveal}>
            <div className={styles.indexWrapper}>
              <span className={styles.index}>01</span>
              <div className={styles.indexLine}></div>
              <h3 className={styles.title}>Evaluación<br />Personalizada</h3>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                Cada plan comienza con una valoración enfocada en tus objetivos, tu piel y tus necesidades.
              </p>
            </div>
          </motion.div>

          <div className={styles.columnDivider}></div>

          {/* Differentiator 02 */}
          <motion.div className={styles.column} variants={cardReveal}>
            <div className={styles.indexWrapper}>
              <span className={styles.index}>02</span>
              <div className={styles.indexLine}></div>
              <h3 className={styles.title}>Tecnología<br />de Vanguardia</h3>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                Trabajamos con aparatología avanzada y protocolos seleccionados para cada tratamiento.
              </p>
            </div>
          </motion.div>

          <div className={styles.columnDivider}></div>

          {/* Differentiator 03 */}
          <motion.div className={styles.column} variants={cardReveal}>
            <div className={styles.indexWrapper}>
              <span className={styles.index}>03</span>
              <div className={styles.indexLine}></div>
              <h3 className={styles.title}>Enfoque<br />Integral</h3>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                Cuidamos tu piel, tu cuerpo y tu bienestar desde una visión estética y personalizada.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
