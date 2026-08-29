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
        backgroundImage={hero.backgroundImage}
        variant={hero.variant}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        hasTrustBar={false}
      />

      {/* 2. Historia y formación (Clinical Canvas #F2F0F1) */}
      <motion.section
        className={styles.spotlightSection}
        id="founder-spotlight"
        aria-labelledby="founder-heading"
      >
        <div className={styles.spotlightContainer}>
          <div className={styles.spotlightRow}>
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
                    src="/assets/images/home/founder.jpg"
                    alt="Nancy Nieto, fundadora y directora de DERMA.M"
                    variant="light"
                    className={styles.spotlightImage}
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className={styles.spotlightContent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={sectionReveal}
            >
              <p className={styles.spotlightEyebrow}>{historia.eyebrow}</p>
              <div className={styles.spotlightEyebrowLine} aria-hidden="true"></div>
              <h2 id="founder-heading" className={styles.spotlightTitle}>{historia.headline}</h2>
              <p className={styles.spotlightBody}>{historia.body}</p>
              {historia.secondaryBody && (
                <p className={styles.spotlightBodySecondary}>{historia.secondaryBody}</p>
              )}
            </motion.div>
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

      {/* 4. DERMA.M y DERMA.M Academy (Off-White #EFEFEB) */}
      <motion.section
        className={styles.academySection}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={sectionReveal}
        aria-labelledby="academy-heading"
      >
        <div className={styles.academyContainer}>
          <div className={styles.academyRow}>
            <div className={styles.academyContent}>
              <p className={styles.academyEyebrow}>{dermamYAcademy.eyebrow}</p>
              <div className={styles.academyEyebrowLine} aria-hidden="true"></div>
              <h2 id="academy-heading" className={styles.academyTitle}>{dermamYAcademy.headline}</h2>
              <p className={styles.academyBody}>{dermamYAcademy.body}</p>
              {dermamYAcademy.secondaryBody && (
                <p className={styles.academyBodySecondary}>{dermamYAcademy.secondaryBody}</p>
              )}
              <a
                href={dermamYAcademy.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.academyLink}
              >
                {dermamYAcademy.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <motion.div
              className={styles.academyMedia}
              whileHover="hover"
              variants={{ hover: imageHover }}
            >
              <MediaBlock
                src="/assets/images/about/dermam-academy.jpg"
                alt="Interior de DERMA.M Academy con el logotipo Dm Academy en la pared y libros de formación sobre el escritorio."
                variant="light"
                className={styles.academyImage}
              />
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
