import React, { useState, useEffect } from 'react';
import HeroMedia from '../../utils/HeroMedia';
import styles from './TreatmentHero.module.css';

export default function TreatmentHero({
  categoryLabel,
  title,
  description,
  image,
  primaryCta = 'AGENDA TU VALORACIÓN',
  secondaryCta = 'WHATSAPP',
  disclaimer
}) {
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappEnv = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappUrl = whatsappEnv ? `https://wa.me/${whatsappEnv.replace(/[^0-9]/g, '')}` : 'https://wa.link/z7i9vm';
  const [mediaReady, setMediaReady] = useState(!image);

  useEffect(() => {
    if (image) {
      const timer = setTimeout(() => {
        setMediaReady(true);
      }, 2000); // 2s safety fallback
      return () => clearTimeout(timer);
    }
  }, [image]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.grid}>
        {/* Left Column: Text Content */}
        <div 
          className={styles.textContent}
          style={{
            opacity: mediaReady ? 1 : 0,
            transition: 'opacity 480ms ease',
          }}
        >
          {categoryLabel && (
            <div className={styles.categoryBadge}>
              <span className={styles.bullet}></span>
              <span className={styles.categoryName}>{categoryLabel}</span>
            </div>
          )}
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          
          <div className={styles.actions}>
            {primaryCta && (
              <a 
                href={bookingUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary}
              >
                {primaryCta}
              </a>
            )}
            {secondaryCta && (
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnSecondary}
              >
                {secondaryCta}
              </a>
            )}
          </div>

          {disclaimer && (
            <p className={styles.disclaimer}>{disclaimer}</p>
          )}
        </div>

        {/* Right Column: Media Image */}
        <div className={styles.mediaContainer}>
          <div 
            className={styles.heroImage} 
            style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <HeroMedia 
                src={image} 
                alt={title} 
                onReady={() => setMediaReady(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
