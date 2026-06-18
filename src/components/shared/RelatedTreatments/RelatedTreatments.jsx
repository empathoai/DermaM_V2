import React from 'react';
import TreatmentGrid from '../TreatmentGrid/TreatmentGrid';
import styles from './RelatedTreatments.module.css';

export default function RelatedTreatments({ 
  items, 
  headline = 'TRATAMIENTOS RELACIONADOS', 
  variant = 'light' 
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <TreatmentGrid 
          items={items.map(t => ({
            title: t.title,
            description: t.description,
            benefits: t.benefits,
            ideal: t.ideal,
            disclaimer: t.disclaimer,
            ctaLabel: 'VER TRATAMIENTO',
            to: t.to || t.link || t.route,
            image: t.image
          }))}
          variant="light"
          columns={items.length >= 3 ? 3 : items.length}
          showMedia={true}
          sectionHeader={{
            eyebrow: 'TE PUEDE INTERESAR',
            title: headline,
            support: 'Explora opciones complementarias dentro de nuestra selección para encontrar la mejor combinación.'
          }}
        />
      </div>
    </section>
  );
}
