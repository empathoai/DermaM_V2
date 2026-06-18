import React from 'react';
import styles from './SpecsGrid.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function SpecsGrid({ headline, specs, variant = 'light' }) {
  if (!specs || Object.keys(specs).length === 0) return null;

  return (
    <div className={`${styles.wrapper} ${styles[variant]}`}>
      {headline && (
        <div className={styles.headerRow}>
          <SectionHeader title={headline} variant={variant} />
        </div>
      )}
      <div className={styles.grid}>
        {Object.entries(specs).map(([key, value], idx) => (
          <div key={idx} className={styles.specItem}>
            <div className={styles.specKey}>{key}</div>
            <div className={styles.specValue}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
