import React from 'react';
import PageHero from '../../sections/PageHero/PageHero';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import MediaBlock from '../../shared/MediaBlock/MediaBlock';
import TrustSafetyBar from '../../shared/TrustSafetyBar/TrustSafetyBar';
import TreatmentGrid from '../../shared/TreatmentGrid/TreatmentGrid';
import BenefitColumns from '../../shared/BenefitColumns/BenefitColumns';
import ProcessTimeline from '../../shared/ProcessTimeline/ProcessTimeline';
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
      {/* 1. Breadcrumb */}
      {breadcrumb && (
        <div className={styles.breadcrumbWrapper}>
          <div className={styles.container}>
            <Breadcrumb items={breadcrumb.map(item => ({ label: item.label, to: item.link }))} />
          </div>
        </div>
      )}

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
              columns={2}
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

      {/* 6. Who This Category Is For */}
      {whoFor && (
        <section className={styles.whoFor}>
          <div className={styles.narrowContainer}>
            <SectionHeader 
              eyebrow={whoFor.eyebrow}
              title={whoFor.headline}
              variant="dark"
            />
            <ul className={styles.whoForList}>
              {whoFor.list.map((item, idx) => (
                <li key={idx} className={styles.whoForListItem}>
                  <span className={styles.dash}>—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 7. Category Benefits */}
      {benefits && (
        <section className={styles.benefits}>
          <div className={styles.container}>
            <BenefitColumns 
              items={benefits.list}
              variant="light"
              sectionHeader={{
                title: benefits.headline
              }}
            />
          </div>
        </section>
      )}

      {/* 8. Method / Category Approach */}
      {approach && (
        <section className={styles.approach}>
          <div className={styles.narrowContainer}>
            <SectionHeader 
              eyebrow={approach.eyebrow}
              title={approach.headline}
              support={approach.body}
              variant="dark"
              align="center"
            />
          </div>
        </section>
      )}

      {/* 9. Process / Visit Flow */}
      {process && (
        <section className={styles.process}>
          <div className={styles.container}>
            <ProcessTimeline 
              title={process.headline}
              steps={process.steps}
              variant="light"
            />
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
