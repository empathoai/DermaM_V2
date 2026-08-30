import React from 'react';
import HeroMedia from '../../utils/HeroMedia';
import styles from './TreatmentHero.module.css';

export default function TreatmentHero({
  categoryLabel,
  title,
  localTag,
  description,
  image,
  imageAlt,
  primaryCta = 'AGENDA TU VALORACIÓN',
  secondaryCta = 'WHATSAPP',
  disclaimer
}) {
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappEnv = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappUrl = whatsappEnv
    ? `https://wa.me/${whatsappEnv.replace(/[^0-9]/g, '')}`
    : 'https://wa.link/z7i9vm';

  return (
    <section className={styles.heroSection}>

      {/* FULL-BLEED MEDIA BACKGROUND */}
      <div className={styles.mediaBackground}>
        <HeroMedia
          src={image}
          alt={imageAlt || ''}
          className={styles.mediaAsset}
        />
        {/* Asymmetric gradient — heavy left for text, fades right */}
        <div className={styles.gradientOverlay} />
        {/* Top gradient for navbar contrast */}
        <div className={styles.topGradient} />
      </div>

      {/* TWO-COLUMN CONTENT GRID */}
      <div className={styles.grid}>
        {/* Left Column: Text */}
        <div className={styles.textContent}>
          {categoryLabel && (
            <div className={styles.categoryBadge}>
              <div className={styles.bullet} />
              <span className={styles.categoryName}>{categoryLabel}</span>
            </div>
          )}
          <h1 className={styles.title}>
            {title}
            {localTag && <span className={styles.localTag}>{localTag}</span>}
          </h1>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
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


      </div>
    </section>
  );
}
