import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './FeaturedServices.module.css';

export default function FeaturedServices() {
  const { sectionReveal, viewportConfig } = useMotionSystem();

  return (
    <section className={styles.section} aria-label="Tratamientos destacados">
      
      {/* Band 1 - Light */}
      <div className={styles.bandLight}>

        {/* Section intro — integrated into first band */}
        <div className={styles.bandIntro}>
          <p className={styles.sectionEyebrow}>TRATAMIENTOS DESTACADOS</p>
          <h2 className={styles.headline}>
            CUIDADO PERSONALIZADO PARA TU PIEL Y CUERPO.
          </h2>
        </div>

        <motion.div 
          className={`${styles.containerGrid} ${styles.firstGrid}`}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={sectionReveal}
        >
          <div className={styles.contentCol}>
            <p className={styles.editorialLabel}>Cuidado Facial</p>
            <div className={styles.dividerLight}></div>
            <h3 className={styles.treatmentName}>Limpieza Facial Profunda</h3>
            <p className={styles.outcome}>Piel limpia, equilibrada y profundamente renovada.</p>
            <ul className={styles.benefitsList}>
              <li><span className={styles.bullet}></span>Purificación folicular</li>
              <li><span className={styles.bullet}></span>Textura suavizada</li>
              <li><span className={styles.bullet}></span>Preparación para activos</li>
            </ul>
            <div className={styles.actionArea}>
              <Link to="/limpieza-facial-profunda" className={styles.ctaLight}>Ver tratamiento</Link>
              <p className={styles.disclaimer}>
                Requiere valoración médica previa para garantizar tu seguridad y resultados.
              </p>
            </div>
          </div>
          <div className={styles.mediaCol}>
            <img
              src="/assets/images/home/featured-limpieza.jpg"
              alt=""
              className={styles.mediaImage}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Band 2 - Dark */}
      <div className={styles.bandDark}>
        <motion.div 
          className={styles.containerGridAlt}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={sectionReveal}
        >
          <div className={styles.contentColDark}>
            <p className={styles.editorialLabelDark}>Bioestimulación</p>
            <div className={styles.dividerDark}></div>
            <h3 className={styles.treatmentNameDark}>PRP y Fibrina</h3>
            <p className={styles.outcomeDark}>Bioestimulación cutánea natural y progresiva.</p>
            <ul className={styles.benefitsListDark}>
              <li><span className={styles.bulletDark}></span>Apoyo a la firmeza</li>
              <li><span className={styles.bulletDark}></span>Textura mejorada</li>
              <li><span className={styles.bulletDark}></span>Regeneración autóloga</li>
            </ul>
            <div className={styles.actionArea}>
              <Link to="/prf-y-fibrina" className={styles.ctaDark}>Ver tratamiento</Link>
              <p className={styles.disclaimerDark}>
                Requiere valoración médica previa para garantizar tu seguridad y resultados.
              </p>
            </div>
          </div>
          <div className={styles.mediaColDark}>
            <img
              src="/assets/images/home/featured-prf.jpg"
              alt=""
              className={styles.mediaImage}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Band 3 - Light */}
      <div className={styles.bandLight}>
        <motion.div 
          className={styles.containerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={sectionReveal}
        >
          <div className={styles.contentCol}>
            <p className={styles.editorialLabel}>Recuperación</p>
            <div className={styles.dividerLight}></div>
            <h3 className={styles.treatmentName}>Tratamientos Postoperatorios</h3>
            <p className={styles.outcome}>Apoyo experto para una recuperación cómoda.</p>
            <ul className={styles.benefitsList}>
              <li><span className={styles.bullet}></span>Drenaje linfático</li>
              <li><span className={styles.bullet}></span>Reducción de inflamación</li>
              <li><span className={styles.bullet}></span>Prevención de fibrosis</li>
            </ul>
            <div className={styles.actionArea}>
              <button className={styles.ctaLight}>Agenda tu valoración</button>
              <p className={styles.disclaimer}>
                Requiere valoración médica previa para garantizar tu seguridad y resultados.
              </p>
            </div>
          </div>
          <div className={styles.mediaCol}>
            <img
              src="/assets/images/home/featured-postoperatorios.jpg"
              alt=""
              className={styles.mediaImage}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
