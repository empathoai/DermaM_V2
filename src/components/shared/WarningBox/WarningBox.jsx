import React from 'react';
import styles from './WarningBox.module.css';

export default function WarningBox({
  title = 'CUÁNDO CONSULTAR ANTES',
  body = 'Este tratamiento requiere valoración previa para confirmar si es adecuado para ti.',
  items = [
    'Si tienes condiciones activas en la zona a tratar',
    'Si estás embarazada o en lactancia',
    'Si estás bajo tratamiento médico o estético reciente',
    'Si presentas sensibilidad, irritación o lesiones visibles',
    'Si tienes dudas sobre compatibilidad con tu estado actual'
  ],
  variant = 'warm' // 'warm' (#CCC9C1) or 'light' (#EFEFEB)
}) {
  return (
    <div className={`${styles.box} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {/* Clinical Info / Alert Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={styles.icon}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {body && <p className={styles.body}>{body}</p>}
        {items && items.length > 0 && (
          <ul className={styles.list}>
            {items.map((item, idx) => (
              <li key={idx} className={styles.item}>
                <span className={styles.bullet}>—</span>
                <span className={styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
