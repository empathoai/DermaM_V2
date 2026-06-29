import React from 'react';
import ListSparkle from '../ListSparkle/ListSparkle';
import styles from './WarningBox.module.css';

export default function WarningBox({
  eyebrow = 'PRECAUCIONES CLÍNICAS',
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
      <div className={styles.grid}>
        <div className={styles.metaCol}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.contentCol}>
          <h2 className={styles.title}>{title}</h2>
          {body && <p className={styles.body}>{body}</p>}
          
          {items && items.length > 0 && (
            <ul className={styles.list}>
              {items.map((item, idx) => (
                <li key={idx} className={styles.item}>
                  <ListSparkle variant="dark" />
                  <p className={styles.itemText}>{item}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
