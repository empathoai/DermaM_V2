import React from 'react';
import styles from './SectionHeader.module.css';

export default function SectionHeader({
  eyebrow,
  title,
  support,
  variant = 'light',
  align = 'left',
  maxWidth,
}) {
  return (
    <div className={`${styles.header} ${styles[variant]} ${styles[align]}`} style={maxWidth ? { maxWidth } : {}}>
      {eyebrow && (
        <div className={styles.eyebrowContainer}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <div className={styles.line}></div>
        </div>
      )}
      {title && <h2 className={styles.title}>{title}</h2>}
      {support && <p className={styles.support}>{support}</p>}
    </div>
  );
}
