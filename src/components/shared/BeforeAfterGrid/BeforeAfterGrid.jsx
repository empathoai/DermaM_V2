import React from 'react';
import styles from './BeforeAfterGrid.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function BeforeAfterGrid({ eyebrow, headline, items, disclaimer, variant = 'dark' }) {
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
                {item.before ? (
                  <img 
                    src={item.before} 
                    alt="Before" 
                    className={styles.image} 
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className={styles.fallbackImage} />
                )}
                <div className={`${styles.imageLabel} ${variant === 'light' ? styles.lightLabel : ''}`}>ANTES</div>
              </div>
              <div className={styles.imageContainer}>
                {item.after ? (
                  <img 
                    src={item.after} 
                    alt="After" 
                    className={styles.image} 
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className={styles.fallbackImage} />
                )}
                <div className={`${styles.imageLabel} ${variant === 'light' ? styles.lightLabel : ''}`}>DESPUÉS</div>
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
