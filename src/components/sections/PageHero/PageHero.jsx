import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import HeroMedia from '../../utils/HeroMedia';
import styles from './PageHero.module.css';

export default function PageHero({
  eyebrow,
  title,
  body,
  backgroundImage,
  variant = 'default',
  primaryCta,
  secondaryCta,
  hasTrustBar = true
}) {
  const isLanding = variant === 'landing';
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappUrl = 'https://wa.link/z7i9vm';
  const { sectionReveal } = useMotionSystem();
  const [mediaReady, setMediaReady] = useState(!backgroundImage);

  useEffect(() => {
    if (backgroundImage) {
      const timer = setTimeout(() => {
        setMediaReady(true);
      }, 2000); // 2s safety fallback
      return () => clearTimeout(timer);
    }
  }, [backgroundImage]);

  return (
    <section 
      className={`${styles.pageHero} ${isLanding ? styles.landingHeight : ''} ${!hasTrustBar ? styles.fullViewport : ''}`}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <HeroMedia 
          src={backgroundImage} 
          alt={title} 
          onReady={() => setMediaReady(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className={styles.overlay}></div>
      
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          opacity: mediaReady ? 1 : 0,
          transition: 'opacity 480ms ease',
        }}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={sectionReveal}
          >
            <div className={styles.eyebrowWrapper}>
              <div className={styles.line}></div>
              <p className={styles.eyebrow}>{eyebrow}</p>
            </div>
            
            <h1 className={styles.title}>{title}</h1>
            
            {body && <p className={styles.body}>{body}</p>}
            
            {isLanding && (primaryCta || secondaryCta) && (
              <div className={styles.ctaGroup}>
                {primaryCta && (
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryCta}>
                    {primaryCta}
                  </a>
                )}
                {secondaryCta && (
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryCta}>
                    {secondaryCta}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
