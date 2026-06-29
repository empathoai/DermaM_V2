import React from 'react';
import { Link } from 'react-router-dom';
import MediaBlock from '../MediaBlock/MediaBlock';
import styles from './TreatmentCard.module.css';

export default function TreatmentCard({
  title,
  description,
  benefits,
  ideal,
  to,
  ctaLabel,
  cta, // support both cta and ctaLabel
  ctaTo,
  image,
  imagePosition,
  variant = 'dark',
  showMedia = true,
  disclaimer
}) {
  const finalTo = to || ctaTo;
  const CardWrapper = finalTo ? Link : 'article';
  const wrapperProps = finalTo 
    ? { to: finalTo, className: `${styles.card} ${styles[variant]} ${styles.interactive}` } 
    : { className: `${styles.card} ${styles[variant]}` };

  const finalCtaLabel = ctaLabel || cta;

  const renderCta = () => {
    if (!finalCtaLabel) return null;
    return (
      <div className={styles.ctaWrapper}>
        <span className={styles.cta}>
          <span>{finalCtaLabel}</span>
          <span className={styles.arrow}>&rarr;</span>
        </span>
      </div>
    );
  };

  return (
    <CardWrapper {...wrapperProps}>
      {showMedia && image && (
        <div className={styles.imageWrapper}>
          <MediaBlock src={image} alt={title} variant={variant} imagePosition={imagePosition} />
        </div>
      )}
      <div className={styles.content}>
        {variant === 'dark' && <div className={styles.accentLine} />}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.desc}>{description}</p>}
        
        {ideal && <p className={styles.ideal}>{ideal}</p>}
        
        {disclaimer && (
          <div className={styles.disclaimerWrapper}>
            <svg className={styles.shieldIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className={styles.disclaimer}>{disclaimer}</p>
          </div>
        )}
        
        {renderCta()}
      </div>
    </CardWrapper>
  );
}
