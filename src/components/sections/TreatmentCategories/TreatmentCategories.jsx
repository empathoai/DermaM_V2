import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import styles from './TreatmentCategories.module.css';

export default function TreatmentCategories() {
  const { sectionReveal, cardStaggerContainer, cardReveal, imageHover, viewportConfig } = useMotionSystem();

  const categories = [
    {
      id: 'faciales',
      name: 'Faciales',
      image: '/assets/images/home/categories/faciales.jpg',
      route: '/faciales'
    },
    {
      id: 'corporales',
      name: 'Corporales',
      image: '/assets/images/home/categories/corporales.jpg',
      route: '/corporales'
    },
    {
      id: 'laser-luz',
      name: 'Láser y Luz',
      image: '/assets/images/home/categories/laser-y-luz.jpg',
      route: '/laser-y-luz'
    },
    {
      id: 'dental-estetico',
      name: 'Dental Estético',
      image: '/assets/images/home/categories/dental-estetico.jpg',
      route: '/dental-estetico'
    },
    {
      id: 'iv-therapy',
      name: 'IV Therapy',
      image: '/assets/images/home/categories/iv-therapy.jpg',
      route: '/iv-therapy'
    },
    {
      id: 'capilar',
      name: 'Capilar',
      image: '/assets/images/home/categories/capilar.jpg',
      route: '/capilar'
    }
  ];

  return (
    <section className={styles.section} aria-label="Categorías de tratamientos">
      
      {/* Intro Area */}
      <div className={styles.introWrapper}>
        <motion.div 
          className={styles.introContent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={sectionReveal}
        >
          <div className={styles.introText}>
            <p className={styles.eyebrow}>Tratamientos</p>
            <h2 className={styles.headline}>
              Soluciones avanzadas <br className={styles.breakDesktop} />
              para cada necesidad
            </h2>
          </div>

        </motion.div>
      </div>

      <div className={styles.divider}></div>

      {/* Grid Area */}
      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={cardStaggerContainer}
      >
        {categories.map((cat) => (
          <Link
            to={cat.route}
            key={cat.id}
            className={styles.tile}
            style={{ overflow: 'hidden', display: 'block' }}
          >
            <motion.div
              variants={cardReveal}
              whileHover="hover"
              style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
            >
              <motion.img 
                src={cat.image} 
                alt="" 
                className={styles.image} 
                loading="lazy" 
                variants={{ hover: imageHover }}
              />
              <div className={styles.overlay}></div>
              <div className={styles.tileContent}>
                <h3 className={styles.tileTitle}>{cat.name}</h3>
                <span className={styles.tileArrow}>&#8594;</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

    </section>
  );
}
