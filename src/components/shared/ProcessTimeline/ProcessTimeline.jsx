import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './ProcessTimeline.module.css';

export default function ProcessTimeline({
  eyebrow,
  title,
  support,
  steps,
  variant = 'light',
  layout = 'horizontal'
}) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={`${styles.wrapper} ${styles[variant]} ${styles[layout]}`}>
      {(eyebrow || title || support) && (
        <div className={styles.header}>
          <SectionHeader 
            eyebrow={eyebrow} 
            title={title} 
            support={support} 
            variant={variant} 
            align={layout === 'horizontal' ? 'center' : 'left'} 
            maxWidth={layout === 'horizontal' ? "800px" : undefined}
          />
        </div>
      )}
      <div className={styles.timelineArea}>
        <div className={styles.track}></div>
        <div className={styles.mobileTrack}></div>
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.markerContainer}>
                <div className={styles.circle}>
                  {step.number || (idx + 1).toString().padStart(2, '0')}
                </div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                {step.body && <p className={styles.stepBody}>{step.body}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
