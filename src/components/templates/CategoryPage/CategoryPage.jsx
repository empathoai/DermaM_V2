import React from 'react';
import PageHero from '../../sections/PageHero/PageHero';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import MediaBlock from '../../shared/MediaBlock/MediaBlock';
import TrustSafetyBar from '../../shared/TrustSafetyBar/TrustSafetyBar';
import TreatmentGrid from '../../shared/TreatmentGrid/TreatmentGrid';
import TestimonialsSection from '../../shared/TestimonialsSection/TestimonialsSection';
import FinalCTA from '../../shared/FinalCTA/FinalCTA';
import styles from './CategoryPage.module.css';

export default function CategoryPage({ data }) {
  if (!data) return null;

  const {
    breadcrumb,
    hero,
    trustItems,
    overview,
    featuredTreatments,
    complementaryTreatments,
    whoFor,
    benefits,
    approach,
    process,
    testimonials,
    cta
  } = data;

  return (
    <div className={styles.categoryPage}>
      {/* 2. PageHero */}
      {hero && (
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          body={hero.body}
          backgroundImage={hero.backgroundImage}
          variant="default"
        />
      )}

      {/* 3. Trust / Safety Bar */}
      {trustItems && trustItems.length > 0 && (
        <TrustSafetyBar items={trustItems} variant="light" columns={trustItems.length > 3 ? 4 : 3} />
      )}

      {/* 4. Category Overview */}
      {overview && (
        <section className={styles.overview}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <SectionHeader 
                  eyebrow={overview.eyebrow}
                  title={overview.headline}
                  support={overview.body}
                  variant="light"
                />
              </div>
              <div className={styles.overviewMedia}>
                <MediaBlock src={overview.image} alt={overview.headline} variant="light" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Featured Treatments Grid */}
      {featuredTreatments && (
        <section className={styles.featured}>
          <div className={styles.container}>
            <TreatmentGrid 
              items={featuredTreatments.treatments.map(t => ({
                title: t.title,
                description: t.description,
                benefits: t.benefits,
                ideal: t.ideal,
                disclaimer: t.disclaimer,
                ctaLabel: t.cta,
                to: t.to || t.link,
                image: t.image
              }))}
              variant="dark"
              columns={3}
              sectionHeader={{
                eyebrow: featuredTreatments.eyebrow,
                title: featuredTreatments.headline,
                support: featuredTreatments.support
              }}
            />
          </div>
        </section>
      )}

      {/* 5b. Complementary Treatments Grid */}
      {complementaryTreatments && (
        <section className={styles.additional}>
          <div className={styles.container}>
            <TreatmentGrid 
              items={complementaryTreatments.treatments.map(t => ({
                title: t.title,
                description: t.description,
                benefits: t.benefits,
                ideal: t.ideal,
                disclaimer: t.disclaimer,
                ctaLabel: t.cta,
                to: null,
                ctaTo: t.ctaTo,
                image: t.image
              }))}
              variant="light"
              columns={3}
              showMedia={true}
              sectionHeader={{
                eyebrow: complementaryTreatments.eyebrow,
                title: complementaryTreatments.headline,
                support: complementaryTreatments.support
              }}
            />
          </div>
        </section>
      )}

      {/* 6. Who This Category Is For (Dark Parallax Section) */}
      {whoFor && (
        <section 
          className={styles.whoForParallax} 
          style={{ backgroundImage: `url(${whoFor.backgroundImage || hero?.backgroundImage || ''})` }}
        >
          <div className={styles.parallaxOverlay}></div>
          <div className={styles.parallaxContainer}>
            <SectionHeader 
              eyebrow={whoFor.eyebrow}
              title={whoFor.headline}
              variant="dark"
              align="center"
            />
            <div className={styles.whoForEditorialGrid}>
              {whoFor.list.map((item, idx) => (
                <div key={idx} className={styles.whoForCard}>
                  <span className={styles.whoForNumber}>{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className={styles.whoForText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Testimonials */}
      {testimonials && (
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <TestimonialsSection 
              eyebrow={testimonials.eyebrow}
              title={testimonials.headline}
              support={testimonials.support}
              testimonials={testimonials.list}
              variant="offWhite"
              layout="compact"
            />
          </div>
        </section>
      )}

      {/* 11. Category CTA */}
      {cta && (
        <FinalCTA 
          eyebrow={cta.eyebrow}
          title={cta.headline}
          body={cta.body}
          primaryCta={cta.primaryCta}
          secondaryCta={cta.secondaryCta}
          disclaimer={cta.disclaimer}
          backgroundImage={cta.backgroundImage}
          variant="dark"
        />
      )}
    </div>
  );
}
