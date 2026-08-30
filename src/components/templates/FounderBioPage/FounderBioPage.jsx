import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import PageHero from '../../sections/PageHero/PageHero';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import MediaBlock from '../../shared/MediaBlock/MediaBlock';
import FinalCTA from '../../shared/FinalCTA/FinalCTA';
import styles from './FounderBioPage.module.css';

export default function FounderBioPage({ data }) {
  const { sectionReveal, imageHover, viewportConfig } = useMotionSystem();

  if (!data) return null;

  const { hero, historia, filosofia, dermamYAcademy, quote, cta } = data;

  return (
    <div className={styles.founderBioPage}>
      {/* 1. PageHero */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        body={hero.body}
        attribution={hero.attribution}
        backgroundImage={hero.backgroundImage}
        variant={hero.variant}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        hasTrustBar={false}
      />

      {/* 2. Historia y formación (Clinical Canvas #F2F0F1) — texto, sin imagen */}
      <motion.section
        className={styles.historiaSection}
        id="founder-spotlight"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={sectionReveal}
        aria-labelledby="founder-heading"
      >
        <div className={styles.historiaContainer}>
          <div className={styles.historiaHeader}>
            <SectionHeader
              eyebrow={historia.eyebrow}
              title={historia.headline}
              titleId="founder-heading"
              variant="light"
              align="left"
            />
          </div>
          <div className={styles.historiaContent}>
            {historia.credentials && (
              <dl className={styles.historiaCredentials}>
                {historia.credentials.map((item) => (
                  <div className={styles.historiaCredential} key={item.region}>
                    <dt className={styles.historiaRegion}>{item.region}</dt>
                    <dd className={styles.historiaDetail}>{item.detail}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className={styles.historiaBody}>{historia.body}</p>
          </div>
        </div>
      </motion.section>

      {/* 3. Filosofía + Quote (Dark Authority #141313) */}
      <motion.section
        className={styles.philosophySection}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={sectionReveal}
        aria-labelledby="filosofia-heading"
      >
        <div className={styles.philosophyContainer}>
          <div className={styles.philosophyHeader}>
            <SectionHeader
              eyebrow={filosofia.eyebrow}
              title={filosofia.headline}
              titleId="filosofia-heading"
              variant="dark"
              align="left"
            />
          </div>
          <div className={styles.philosophyContent}>
            <p className={styles.philosophyBody}>{filosofia.body}</p>
            {filosofia.secondaryBody && (
              <p className={styles.philosophySupport}>{filosofia.secondaryBody}</p>
            )}
            <blockquote className={styles.philosophyQuote}>
              <p>“{quote.text}”</p>
              <footer>
                <cite>{quote.author}</cite>
                <span>{quote.title}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </motion.section>

      {/* 4. DERMA.M y DERMA.M Academy — mismo patrón que Historia, imagen a la derecha */}
      <motion.section
        className={styles.spotlightSection}
        id="academy-spotlight"
        aria-labelledby="academy-heading"
      >
        <div className={styles.spotlightContainer}>
          <div className={styles.spotlightRow}>
            <motion.div
              className={styles.spotlightContent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={sectionReveal}
            >
              <p className={styles.spotlightEyebrow}>{dermamYAcademy.eyebrow}</p>
              <div className={styles.spotlightEyebrowLine} aria-hidden="true"></div>
              <h2 id="academy-heading" className={styles.spotlightTitle}>{dermamYAcademy.headline}</h2>
              <p className={styles.spotlightBody}>{dermamYAcademy.body}</p>
              {dermamYAcademy.secondaryBody && (
                <p className={styles.spotlightBodySecondary}>{dermamYAcademy.secondaryBody}</p>
              )}
              <a
                href={dermamYAcademy.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.academyLink}
              >
                {dermamYAcademy.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
            <motion.div
              className={styles.spotlightMedia}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={sectionReveal}
            >
              <div className={styles.spotlightMediaFrame}>
                <motion.div className={styles.spotlightMotionMedia} whileHover="hover" variants={{ hover: imageHover }}>
                  <MediaBlock
                    src="/assets/images/about/dermam-academy.jpg"
                    alt="Interior de DERMA.M Academy con el logotipo Dm Academy en la pared y libros de formación sobre el escritorio."
                    variant="light"
                    className={styles.spotlightImage}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 5. Final CTA (Dark Authority #141313) */}
      <FinalCTA
        eyebrow={cta.eyebrow}
        title={cta.headline}
        body={cta.body}
        backgroundImage={cta.backgroundImage}
        primaryCta={cta.primaryCta}
        secondaryCta={cta.secondaryCta}
        disclaimer={cta.disclaimer}
        variant="dark"
      />
    </div>
  );
}
