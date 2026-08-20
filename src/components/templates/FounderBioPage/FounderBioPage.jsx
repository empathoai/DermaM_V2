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

  const { hero, founderSpotlight, founderPhilosophy, quote, cta } = data;

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

      {/* 2. Founder Spotlight (Clinical Canvas #F2F0F1) */}
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
                    src={founderSpotlight.image}
                    alt={founderSpotlight.imageAlt}
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
              <p className={styles.spotlightEyebrow}>{founderSpotlight.eyebrow}</p>
              <div className={styles.spotlightEyebrowLine} aria-hidden="true"></div>
              <h2 id="founder-heading" className={styles.spotlightTitle}>{founderSpotlight.name}</h2>
              <p className={styles.spotlightSubheadline}>{founderSpotlight.subheadline}</p>
              <p className={styles.spotlightBody}>{founderSpotlight.body}</p>
              {founderSpotlight.secondaryBody && (
                <p className={styles.spotlightBodySecondary}>{founderSpotlight.secondaryBody}</p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Founder Philosophy + Quote (Dark Authority #141313) */}
      <motion.section
        className={styles.philosophySection}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={sectionReveal}
      >
        <div className={styles.philosophyContainer}>
          <div className={styles.philosophyHeader}>
            <SectionHeader
              eyebrow={founderPhilosophy.eyebrow}
              title={founderPhilosophy.headline}
              variant="dark"
              align="left"
            />
          </div>
          <div className={styles.philosophyContent}>
            <p className={styles.philosophyBody}>{founderPhilosophy.body}</p>
            {founderPhilosophy.supportingText && (
              <p className={styles.philosophySupport}>{founderPhilosophy.supportingText}</p>
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

      {/* 4. Final CTA (Dark Authority #141313) */}
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
