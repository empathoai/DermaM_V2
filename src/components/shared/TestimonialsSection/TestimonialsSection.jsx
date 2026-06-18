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
            maxWidth="420px"
          />
        </div>
      )}
      <div className={styles.grid}>
        {testimonials.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.quoteIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8H6C6 5.79086 7.79086 4 10 4V2C6.68629 2 4 4.68629 4 8V16H10V8Z" fill="currentColor"/>
                <path d="M20 8H16C16 5.79086 17.7908 4 20 4V2C16.6863 2 14 4.68629 14 8V16H20V8Z" fill="currentColor"/>
              </svg>
            </div>
            <blockquote className={styles.quote}>
              {item.quote}
            </blockquote>
            <div className={styles.cardDivider}></div>
            <div className={styles.starsWrapper} aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.star}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <cite className={styles.clientName}>{item.author}</cite>
          </div>
        ))}
      </div>
    </div>
  );
}
