import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import { founderPrimer } from '../../../data/aboutPage';
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
                src="/assets/images/home/nancy-nieto-fundadora.jpg"
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
              <p className={styles.eyebrow}>{founderPrimer.eyebrow}</p>
              <div className={styles.eyebrowLine}></div>
              <h2 id="founder-heading" className={styles.headline}>{founderPrimer.name}</h2>

              <div className={styles.introContent}>
                <p className={styles.subheadline}>{founderPrimer.credentialLine}</p>
                <p className={styles.bodyCopy}>{founderPrimer.relationalLine}</p>
                <Link to={founderPrimer.linkTo} className={styles.founderLink}>
                  {founderPrimer.linkLabel} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
