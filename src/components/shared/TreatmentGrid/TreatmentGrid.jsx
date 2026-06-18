import React from 'react';
import TreatmentCard from '../TreatmentCard/TreatmentCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './TreatmentGrid.module.css';

export default function TreatmentGrid({
  items,
  variant = 'dark',
  columns = 2,
  showMedia = true,
  sectionHeader
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      {sectionHeader && (
        <div className={styles.header}>
          <SectionHeader {...sectionHeader} variant={variant} />
        </div>
      )}
      <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
        {items.map((item, idx) => (
          <TreatmentCard
            key={idx}
            {...item}
            variant={variant}
            showMedia={showMedia}
          />
        ))}
      </div>
    </div>
  );
}
