import React from 'react';
import styles from './BeforeAfterGrid.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import Picture from '../Picture/Picture';

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
                {item.before ? (
                  <Picture
                    src={item.before}
                    alt={item.beforeAlt || 'Before'}
                    className={styles.image}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className={styles.fallbackImage} />
                )}
                <div className={`${styles.imageLabel} ${variant === 'light' ? styles.lightLabel : ''}`}>{beforeLabel}</div>
              </div>
              <div className={styles.imageContainer}>
                {item.after ? (
                  <Picture
                    src={item.after}
                    alt={item.afterAlt || 'After'}
                    className={styles.image}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className={styles.fallbackImage} />
                )}
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
