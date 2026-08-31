import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import Picture from '../../shared/Picture/Picture';
import ListSparkle from '../../shared/ListSparkle/ListSparkle';
import { MEDICAL_VALUATION_NOTICE } from '../../../data/siteMeta';
import styles from './FeaturedServices.module.css';

export default function FeaturedServices() {
  const { sectionReveal, viewportConfig } = useMotionSystem();

  return (
    <section className={styles.section} aria-label="Tratamientos destacados">
      
      {/* Section intro — matching TreatmentCategories structure */}
      <div className={styles.bandDarkIntro}>
        <div className={styles.introWrapper}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <p className={styles.eyebrow}>TRATAMIENTOS DESTACADOS</p>
              <h2 className={styles.headline}>
                CUIDADO PERSONALIZADO <br className={styles.breakDesktop} />
                PARA TU PIEL Y CUERPO
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Band 1 - Light */}
      <div className={styles.bandLight}>

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
              <li><ListSparkle variant="dark" /><span>Purificación folicular</span></li>
              <li><ListSparkle variant="dark" /><span>Textura suavizada</span></li>
              <li><ListSparkle variant="dark" /><span>Preparación para activos</span></li>
            </ul>
            <div className={styles.actionArea}>
              <Link to="/limpieza-facial-profunda" className={styles.ctaLight}>Ver tratamiento</Link>
              <p className={styles.disclaimer}>{MEDICAL_VALUATION_NOTICE}</p>
            </div>
          </div>
          <div className={styles.mediaCol}>
            <Picture
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
            <h3 className={styles.treatmentNameDark}>Plasma Rico en Plaquetas y Fibrina</h3>
            <p className={styles.outcomeDark}>Bioestimulación cutánea natural y progresiva.</p>
            <ul className={styles.benefitsListDark}>
              <li><ListSparkle variant="light" /><span>Apoyo a la firmeza</span></li>
              <li><ListSparkle variant="light" /><span>Textura mejorada</span></li>
              <li><ListSparkle variant="light" /><span>Regeneración autóloga</span></li>
            </ul>
            <div className={styles.actionArea}>
              <Link to="/prf-y-fibrina" className={styles.ctaDark}>Ver tratamiento</Link>
              <p className={styles.disclaimerDark}>{MEDICAL_VALUATION_NOTICE}</p>
            </div>
          </div>
          <div className={styles.mediaColDark}>
            <Picture
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
              <li><ListSparkle variant="dark" /><span>Drenaje linfático</span></li>
              <li><ListSparkle variant="dark" /><span>Reducción de inflamación</span></li>
              <li><ListSparkle variant="dark" /><span>Prevención de fibrosis</span></li>
            </ul>
            <div className={styles.actionArea}>
              <Link to="/tratamientos-postoperatorios" className={styles.ctaLight}>Ver tratamiento</Link>
              <p className={styles.disclaimer}>{MEDICAL_VALUATION_NOTICE}</p>
            </div>
          </div>
          <div className={styles.mediaCol}>
            <Picture
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
