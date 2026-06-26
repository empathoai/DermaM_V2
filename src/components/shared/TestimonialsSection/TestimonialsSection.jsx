import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection({
  eyebrow,
  title,
  support,
  testimonials,
  variant = 'offWhite',
  layout = 'compact'
}) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className={`${styles.wrapper} ${styles[variant]} ${styles[layout]}`}>
      {(eyebrow || title || support) && (
        <div className={styles.header}>
          <SectionHeader 
            eyebrow={eyebrow} 
            title={title} 
            support={support} 
            variant={variant === 'dark' ? 'dark' : 'light'} 
            align="left"
            maxWidth="800px"
          />
        </div>
      )}
      <div className={styles.grid}>
        {testimonials.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <blockquote className={styles.quote}>
              {item.quote}
            </blockquote>
            <div className={styles.cardDivider}></div>
            <cite className={styles.clientName}>{item.author}</cite>
          </div>
        ))}
      </div>
    </div>
  );
}
