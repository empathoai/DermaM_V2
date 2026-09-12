import React from 'react';
import { Star } from 'lucide-react';
import { HERO_RATING, GOOGLE_REVIEWS_URL } from '../../../data/siteMeta';
import styles from './RatingBadge.module.css';

/**
 * Static CRO trust badge: DERMA.M's real Google rating + a one-click link to
 * the live Google Business Profile for verification. No schema attached —
 * self-served LocalBusiness ratings are ineligible for Google's star rich
 * snippet regardless of how they're sourced (see DECISIONS.md 2026-09-12).
 *
 * @param {{ tone?: 'light' | 'dark', className?: string }} props
 *   tone 'light' = dark text for light section backgrounds;
 *   tone 'dark'  = light/muted text for dark backgrounds (e.g. the Home hero).
 */
export default function RatingBadge({ tone = 'dark', className }) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.badge} ${styles[tone]} ${className || ''}`}
    >
      <span className={styles.stars} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className={styles.star} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span className={styles.text}>{HERO_RATING.value} en Google</span>
      <span className={styles.srOnly}> (se abre en una pestaña nueva)</span>
    </a>
  );
}
