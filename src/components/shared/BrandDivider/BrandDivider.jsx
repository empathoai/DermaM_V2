import React from 'react';
import styles from './BrandDivider.module.css';

export default function BrandDivider({ text, image }) {
  if (!text) return null;

  return (
    <section 
      className={styles.divider}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      {image && <div className={styles.overlay}></div>}
      <div className={styles.container}>
        <h2 className={styles.text}>{text}</h2>
      </div>
    </section>
  );
}
