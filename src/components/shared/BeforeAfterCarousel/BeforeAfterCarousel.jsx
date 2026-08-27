import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './BeforeAfterCarousel.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import Picture from '../Picture/Picture';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function BeforeAfterCarousel({ eyebrow, headline, items, disclaimer, variant = 'light' }) {
  if (!items || items.length === 0) return null;

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, total - 1));
    track.scrollTo({
      left: clamped * track.clientWidth,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
    setActiveIndex(clamped);
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        const width = track.clientWidth || 1;
        setActiveIndex(Math.round(track.scrollLeft / width));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <SectionHeader eyebrow={eyebrow} title={headline} variant={variant} />
      </div>

      <div
        className={styles.viewport}
        role="region"
        aria-roledescription="carousel"
        aria-label="Resultados de tratamientos postoperatorios"
      >
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex <= 0}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className={styles.track} ref={trackRef} tabIndex={0}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={styles.slide}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${idx + 1} de ${total}`}
            >
              <Picture
                src={item.src}
                alt={item.alt}
                className={styles.image}
                loading={idx === 0 ? undefined : 'lazy'}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              {item.type === 'result' ? (
                <div className={`${styles.label} ${styles.labelBefore}`}>RESULTADO</div>
              ) : (
                <>
                  <div className={`${styles.label} ${styles.labelBefore}`}>ANTES</div>
                  <div className={`${styles.label} ${styles.labelAfter}`}>DESPUÉS</div>
                </>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex >= total - 1}
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.dots}>
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
            aria-current={idx === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>

      {disclaimer && (
        <div className={styles.disclaimerRow}>
          <p className={styles.disclaimer}>{disclaimer}</p>
        </div>
      )}
    </div>
  );
}
