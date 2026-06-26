import React from 'react';
import styles from './ListSparkle.module.css';

export default function ListSparkle({ variant = 'light' }) {
  return (
    <div className={`${styles.sparkleContainer} ${styles[variant]}`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
      </svg>
    </div>
  );
}
