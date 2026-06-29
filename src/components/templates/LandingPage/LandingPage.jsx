import React from 'react';
import PageHero from '../../sections/PageHero/PageHero';
import TreatmentQuickFacts from '../../shared/TreatmentQuickFacts/TreatmentQuickFacts';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import MediaBlock from '../../shared/MediaBlock/MediaBlock';
import BenefitColumns from '../../shared/BenefitColumns/BenefitColumns';
import BrandDivider from '../../shared/BrandDivider/BrandDivider';
import ProcessTimeline from '../../shared/ProcessTimeline/ProcessTimeline';
import BeforeAfterGrid from '../../shared/BeforeAfterGrid/BeforeAfterGrid';
import TestimonialsSection from '../../shared/TestimonialsSection/TestimonialsSection';
import FAQAccordion from '../../shared/FAQAccordion/FAQAccordion';
import FinalCTA from '../../shared/FinalCTA/FinalCTA';
import ListSparkle from '../../shared/ListSparkle/ListSparkle';
import styles from './LandingPage.module.css';

export default function LandingPage({ data }) {
  if (!data) return null;

  const {
    hero,
    quickFacts,
    trustItems,
    problem,
    benefits,
    howItWorks,
    beforeAfter,
    testimonials,
    faq,
    cta
  } = data;

  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_NUMBER || 'https://wa.link/z7i9vm';

  return (
    <div className={styles.landingPage}>
      {/* 1. PageHero */}
      {hero && (
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          body={hero.body}
          backgroundImage={hero.backgroundImage}
          variant="landing"
          primaryCta={hero.primaryCta || 'AGENDA TU VALORACIÓN'}
          secondaryCta={hero.secondaryCta || 'WHATSAPP'}
        />
      )}

      {/* 2. Treatment Quick Facts Bar */}
      {quickFacts && quickFacts.length > 0 && (
        <TreatmentQuickFacts facts={quickFacts} variant="light" />
      )}

      {/* 3. Problem / Diagnosis */}
      {problem && (
        <section className={styles.problem} aria-labelledby="problem-heading">
          <div className={styles.problemGrid}>
            <div className={styles.problemContent}>
              <p className={styles.problemEyebrow}>{problem.eyebrow}</p>
              <div className={styles.problemDivider}></div>
              <h2 id="problem-heading" className={styles.problemHeadline}>{problem.headline}</h2>
              <p className={styles.problemSupport}>{problem.body}</p>
              {problem.list && (
                <ul className={styles.problemList}>
                  {problem.list.map((item, idx) => (
                    <li key={idx} className={styles.problemListItem}>
                      <ListSparkle variant="light" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.problemMedia}>
              <img 
                src={problem.image} 
                alt={problem.headline} 
                className={styles.problemImage} 
                loading="lazy" 
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. Benefits */}
      {benefits && (
        <section className={styles.benefits}>
          <div className={styles.container}>
            <BenefitColumns 
              sectionHeader={{
                eyebrow: benefits.eyebrow,
                title: benefits.headline
              }}
              items={benefits.list}
              variant="light"
            />
          </div>
        </section>
      )}

      {/* 5. How It Works */}
      {howItWorks && (
        <section className={styles.howItWorks} style={{ backgroundImage: `url(${howItWorks.image || problem?.image || ''})` }}>
          <div className={styles.overlay}></div>
          <div className={styles.container}>
            <SectionHeader 
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.headline}
              support={howItWorks.body}
              variant="dark"
            />
            <div className={styles.stepsWrapper}>
              <ProcessTimeline steps={howItWorks.steps} variant="dark" />
            </div>
          </div>
        </section>
      )}

      {/* 7. Before & After */}
      {beforeAfter && (
        <section className={styles.beforeAfter}>
          <div className={styles.container}>
            <BeforeAfterGrid 
              eyebrow={beforeAfter.eyebrow} 
              headline={beforeAfter.headline} 
              items={beforeAfter.items} 
              disclaimer={beforeAfter.disclaimer}
              variant="light"
            />
          </div>
        </section>
      )}

      {/* 8. Brand Promise Divider */}
      {beforeAfter && (
        <BrandDivider text="EL BALANCE PERFECTO ENTRE CIENCIA Y ESTÉTICA NATURAL" image={cta?.backgroundImage || problem?.image} />
      )}

      {/* 9. Testimonials */}
      {testimonials && (
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <TestimonialsSection 
              eyebrow={testimonials.eyebrow}
              title={testimonials.headline}
              support={testimonials.support}
              testimonials={testimonials.list} 
              variant="offWhite" 
            />
          </div>
        </section>
      )}

      {/* 10. FAQ */}
      {faq && (
        <section className={styles.faq}>
          <div className={styles.container}>
            <FAQAccordion headline={faq.headline} items={faq.items} />
          </div>
        </section>
      )}

      {/* 11. Final CTA */}
      {cta && (
        <FinalCTA 
          eyebrow={cta.eyebrow}
          title={cta.headline}
          body={cta.body}
          primaryCta={cta.primaryCta}
          secondaryCta={cta.secondaryCta}
          disclaimer={cta.disclaimer}
          backgroundImage={cta.backgroundImage}
          compactLegal
        />
      )}
    </div>
  );
}
