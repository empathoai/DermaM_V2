import React from 'react';
import { motion } from 'motion/react';
import { useMotionSystem } from '../../utils/motion';
import PageHero from '../../sections/PageHero/PageHero';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import MediaBlock from '../../shared/MediaBlock/MediaBlock';
import BenefitColumns from '../../shared/BenefitColumns/BenefitColumns';
import TeamBySpecialty from '../../shared/TeamBySpecialty/TeamBySpecialty';
import FinalCTA from '../../shared/FinalCTA/FinalCTA';
import styles from './AboutPage.module.css';

export default function AboutPage({ data }) {
  const { sectionReveal, cardStaggerContainer, cardReveal, imageHover, viewportConfig } = useMotionSystem();

  if (!data) return null;

  const {
    hero,
    founderSpotlight,
    founderPhilosophy,
    approach,
    academy,
    teamHeader,
    teamBySpecialty,
    quote,
    testimonials,
    testimonialsHeader,
    cta
  } = data;

  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappEnv = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappUrl = whatsappEnv ? `https://wa.me/${whatsappEnv.replace(/[^0-9]/g, '')}` : 'https://wa.link/z7i9vm';

  return (
    <div className={styles.aboutPage}>
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

      {/* 3. Founder Philosophy (Dark Authority #141313) */}
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

      {/* 4. Science / Experience / Human Care (Clinical Canvas #F2F0F1) */}
      <motion.section 
        className={styles.approachSection}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={sectionReveal}
      >
        <div className={styles.approachContainer}>
          <BenefitColumns
            items={approach.items}
            variant="light"
            showNumbers={true}
            layout="columns"
            sectionHeader={{
              eyebrow: approach.eyebrow,
              title: approach.headline,
              align: "left"
            }}
          />
          {approach.conversion && (
            <div className={styles.approachConversion}>
              <div className={styles.approachConversionCopy}>
                <h3>{approach.conversion.headline}</h3>
                <p>{approach.conversion.body}</p>
              </div>
              <div className={styles.approachConversionActions}>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.conversionPrimary}>
                  {approach.conversion.primaryCta}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.conversionSecondary}>
                  {approach.conversion.secondaryCta}
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* 5. DERMA.M Academy (Off White #EFEFEB) */}
      <motion.section 
        className={styles.academySection} 
        aria-labelledby="academy-heading"
      >
        <div className={styles.academyContainer}>
          <div className={styles.academyRow}>
            <motion.div
              className={styles.academyContent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={sectionReveal}
            >
              <p className={styles.academyEyebrow}>{academy.eyebrow}</p>
              <div className={styles.academyEyebrowLine} aria-hidden="true"></div>
              <h2 id="academy-heading" className={styles.academyTitle}>{academy.headline}</h2>
              <p className={styles.academyBody}>{academy.body}</p>
              {academy.secondaryBody && (
                <p className={styles.academyBodySecondary}>{academy.secondaryBody}</p>
              )}
            </motion.div>
            <motion.div
              className={styles.academyMedia}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={sectionReveal}
            >
              <div className={styles.academyMediaFrame}>
                <motion.div className={styles.academyMotionMedia} whileHover="hover" variants={{ hover: imageHover }}>
                  <MediaBlock
                    src={academy.image}
                    alt={academy.imageAlt}
                    variant="light"
                    className={styles.academyImage}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. Team By Specialty (Clinical Canvas #F2F0F1) */}
      <TeamBySpecialty groups={teamBySpecialty} header={teamHeader} />

      {/* 7. Testimonials (Clinical Canvas #F2F0F1 layout, Off White #EFEFEB card background) */}
      <section className={styles.testimonialsSection} aria-labelledby="testimonials-heading">
        <div className={styles.testimonialsContainer}>
          <div className={styles.layoutSplit}>
            <motion.div 
              className={styles.headingBlock}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={sectionReveal}
            >
              <p className={styles.testimonialEyebrow}>{testimonialsHeader.eyebrow}</p>
              <div className={styles.eyebrowLine}></div>
              <h2 id="testimonials-heading" className={styles.headline}>{testimonialsHeader.headline}</h2>
              <p className={styles.testimonialSupport}>{testimonialsHeader.body}</p>
            </motion.div>
            
            <motion.div 
              className={styles.cardsArea}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={cardStaggerContainer}
            >
              {testimonials.map((test, index) => (
                <motion.div 
                  key={index} 
                  className={styles.testimonialCard}
                  variants={cardReveal}
                >
                  <div className={styles.quoteIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 8H6C6 5.79086 7.79086 4 10 4V2C6.68629 2 4 4.68629 4 8V16H10V8Z" fill="currentColor"/>
                      <path d="M20 8H16C16 5.79086 17.7908 4 20 4V2C16.6863 2 14 4.68629 14 8V16H20V8Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <blockquote className={styles.quote}>
                    {test.quote}
                  </blockquote>
                  <div className={styles.cardDivider}></div>
                  <div className={styles.starsWrapper} aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.star}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <cite className={styles.clientName}>{test.author}</cite>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA (Dark Authority #141313) */}
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
