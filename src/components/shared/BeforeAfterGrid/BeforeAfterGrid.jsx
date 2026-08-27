import React from 'react';
import styles from './BeforeAfterGrid.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import Picture from '../Picture/Picture';

const isVideo = (src) => typeof src === 'string' && src.toLowerCase().endsWith('.mp4');

function SlotMedia({ src, alt, fallbackAlt }) {
  if (!src) return <div className={styles.fallbackImage} />;

  if (isVideo(src)) {
    return (
      <video
        className={styles.image}
        src={src}
        poster={src.replace(/\.mp4$/i, '.jpg')}
        aria-label={alt || fallbackAlt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    );
  }

  return (
    <Picture
      src={src}
      alt={alt || fallbackAlt}
      className={styles.image}
      loading="lazy"
      width={1000}
      height={1250}
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  );
}

export default function BeforeAfterGrid({ eyebrow, headline, items, disclaimer, variant = 'dark', beforeLabel = 'ANTES', afterLabel = 'DESPUÉS' }) {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <SectionHeader eyebrow={eyebrow} title={headline} variant={variant} />
      </div>
      <div className={styles.grid}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.gridItem}>
            <div className={styles.imagePair}>
              <div className={styles.imageContainer}>
                <SlotMedia src={item.before} alt={item.beforeAlt} fallbackAlt="Before" />
                <div className={`${styles.imageLabel} ${variant === 'light' ? styles.lightLabel : ''}`}>{beforeLabel}</div>
              </div>
              <div className={styles.imageContainer}>
                <SlotMedia src={item.after} alt={item.afterAlt} fallbackAlt="After" />
                <div className={`${styles.imageLabel} ${variant === 'light' ? styles.lightLabel : ''}`}>{afterLabel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {disclaimer && (
        <div className={`${styles.disclaimerRow} ${variant === 'light' ? styles.lightDisclaimerRow : ''}`}>
          <p className={`${styles.disclaimer} ${variant === 'light' ? styles.lightDisclaimer : ''}`}>{disclaimer}</p>
        </div>
      )}
    </div>
  );
}
