import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import HeroMedia from '../../utils/HeroMedia';
import styles from './Hero.module.css';

export default function Hero({ backgroundImage, image }) {
  const mediaSrc = backgroundImage || image || '/assets/images/home/hero.mp4';
  const [mediaReady, setMediaReady] = useState(!mediaSrc);

  useEffect(() => {
    if (mediaSrc) {
      const timer = setTimeout(() => {
        setMediaReady(true);
      }, 2000); // 2s safety fallback
      return () => clearTimeout(timer);
    }
  }, [mediaSrc]);

  return (
    <section className={styles.heroSection}>
      {/* BACKGROUND MEDIA CONTAINER & OVERLAYS */}
      <div className={styles.mediaContainer}>
        <HeroMedia
          src={mediaSrc}
          alt=""
          onReady={() => setMediaReady(true)}
          className={styles.heroVideoElement}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Asymmetrical Gradient Overlay for Text Legibility & Mood */}
      <div className={styles.gradientOverlay}></div>

      {/* Vertical subtle gradient for top bar/nav contrast */}
      <div className={styles.topBarOverlay}></div>

      {/* HERO CONTENT */}
      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto text-left py-12 lg:py-16 px-[max(24px,4vw)] lg:px-[max(64px,4vw)]"
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            opacity: mediaReady ? 1 : 0,
            transition: 'opacity 480ms ease',
          }}
        >
          <div className="w-full max-w-[620px] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-6 mb-6 lg:mb-8">
                <div className="w-12 h-[1px] bg-[#f2f0f1]/18"></div>
                <p className="text-[#CCC9C1] text-[12px] tracking-[0.15em] uppercase font-medium m-0">
                  Centro de estética, belleza y salud
                </p>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(2.5rem,5vw+1rem,4rem)] leading-[1.05] tracking-[0.05em] uppercase font-normal lg:font-medium text-[#F2F0F1] m-0 mb-6">
                Salud <br />
                profesional <br />
                para tu <br />
                piel
              </h1>

              {/* Body */}
              <p className="m-0 text-[14px] lg:text-[15px] font-light lg:font-normal leading-[1.8] text-[#CCC9C1] max-w-[520px]">
                Un concepto en el que la belleza y el bienestar conviven en
                espacios únicos, donde cada detalle está cuidado.
              </p>

              {/* CTAs */}
              <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6 w-full sm:w-auto">
                <button className="bg-[#F2F0F1] border border-[#F2F0F1] text-[#141313] px-12 py-[1rem] lg:py-[1.125rem] text-[12px] tracking-[0.1em] transition-colors uppercase font-medium text-center hover:bg-[#CCC9C1] hover:border-[#CCC9C1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1] focus:outline-none">
                  Reservar
                </button>
                <button className="bg-transparent border border-[#f2f0f1]/32 text-[#F2F0F1] px-12 py-[1rem] lg:py-[1.125rem] text-[12px] tracking-[0.1em] transition-colors uppercase font-medium text-center hover:bg-[#f2f0f1]/5 hover:border-[#F2F0F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1] focus:outline-none">
                  Contacto
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
