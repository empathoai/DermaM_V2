import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './BenefitColumns.module.css';

export default function BenefitColumns({
  items,
  variant = 'light',
  showNumbers = false,
  layout = 'columns',
  sectionHeader
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`${styles.wrapper} ${styles[variant]} ${styles[layout]}`}>
      {sectionHeader && (
        <div className={styles.header}>
          <SectionHeader {...sectionHeader} variant={variant} />
        </div>
      )}
      <div className={styles.grid}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.card}>
            {showNumbers && (
              <span className={styles.number}>
                {(idx + 1).toString().padStart(2, '0')}
              </span>
            )}
            <h3 className={styles.title}>{item.title}</h3>
            {item.body && <p className={styles.body}>{item.body}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
