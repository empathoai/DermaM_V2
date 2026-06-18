import React from 'react';
import styles from './TrustSafetyBar.module.css';

const defaultIcons = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2v7.31"></path>
    <path d="M14 9.3V1.99"></path>
    <path d="M8.5 2h7"></path>
    <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
    <path d="M5.52 16h12.96"></path>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 7.5a4.5 4.5 0 1 1 3 4.5H9a4.5 4.5 0 1 1 3-4.5Z"></path>
    <path d="m12 7.5 3-3"></path>
    <path d="m12 7.5-3-3"></path>
    <path d="m12 16.5 3 3"></path>
    <path d="m12 16.5-3 3"></path>
  </svg>
];

export default function TrustSafetyBar({ items, variant = 'warm', columns = 3 }) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`${styles.safetyBar} ${styles[variant]}`}>
      <div className={`${styles.container} ${styles[`cols${columns}`]}`}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.icon}>
              {item.icon ? item.icon : defaultIcons[idx % defaultIcons.length]}
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            {item.body && <p className={styles.body}>{item.body}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
