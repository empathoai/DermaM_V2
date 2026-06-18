import React from 'react';
import PageHero from '../../sections/PageHero/PageHero';
import TreatmentQuickFacts from '../../shared/TreatmentQuickFacts/TreatmentQuickFacts';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import MediaBlock from '../../shared/MediaBlock/MediaBlock';
import BenefitColumns from '../../shared/BenefitColumns/BenefitColumns';
import ProcessTimeline from '../../shared/ProcessTimeline/ProcessTimeline';
import SpecsGrid from '../../shared/SpecsGrid/SpecsGrid';
import BeforeAfterGrid from '../../shared/BeforeAfterGrid/BeforeAfterGrid';
import TestimonialsSection from '../../shared/TestimonialsSection/TestimonialsSection';
import FAQAccordion from '../../shared/FAQAccordion/FAQAccordion';
import FinalCTA from '../../shared/FinalCTA/FinalCTA';
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
    specs,
    beforeAfter,
    visitFlow,
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
        <section className={styles.problem}>
          <div className={styles.container}>
            <div className={styles.problemGrid}>
              <div className={styles.problemContent}>
                <SectionHeader 
                  eyebrow={problem.eyebrow}
                  title={problem.headline}
                  support={problem.body}
                  variant="light"
                  align="left"
                />
                {problem.list && (
                  <ul className={styles.problemList}>
                    {problem.list.map((item, idx) => (
                      <li key={idx} className={styles.problemListItem}>
                        <span className={styles.dash}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.problemMedia}>
                <div className={styles.problemMediaInner}>
                  <MediaBlock src={problem.image} alt={problem.headline} variant="light" />
                </div>
              </div>
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
              variant="dark"
            />
          </div>
        </section>
      )}

      {/* 5. How It Works */}
      {howItWorks && (
        <section className={styles.howItWorks}>
          <div className={styles.container}>
            <SectionHeader 
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.headline}
              support={howItWorks.body}
              variant="light"
            />
            <div className={styles.stepsWrapper}>
              <ProcessTimeline steps={howItWorks.steps} variant="light" />
            </div>
          </div>
        </section>
      )}

      {/* 6. Treatment Details / Specs */}
      {specs && (
        <section className={styles.specs}>
          <div className={styles.container}>
            <SpecsGrid headline={specs.headline} specs={specs.items} variant="light" />
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
            />
          </div>
        </section>
      )}

      {/* 8. Process / Visit Flow */}
      {visitFlow && (
        <section className={styles.visitFlow}>
          <div className={styles.container}>
            <div className={styles.visitFlowHeader}>
               <SectionHeader title={visitFlow.headline} variant="light" />
            </div>
            <ProcessTimeline steps={visitFlow.steps} variant="light" />
          </div>
        </section>
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
        />
      )}
    </div>
  );
}
