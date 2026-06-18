import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb';
import TreatmentHero from '../../shared/TreatmentHero/TreatmentHero';
import TreatmentQuickFacts from '../../shared/TreatmentQuickFacts/TreatmentQuickFacts';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import MediaBlock from '../../shared/MediaBlock/MediaBlock';
import BenefitColumns from '../../shared/BenefitColumns/BenefitColumns';
import ProcessTimeline from '../../shared/ProcessTimeline/ProcessTimeline';
import WarningBox from '../../shared/WarningBox/WarningBox';
import SpecsGrid from '../../shared/SpecsGrid/SpecsGrid';
import BeforeAfterGrid from '../../shared/BeforeAfterGrid/BeforeAfterGrid';
import RelatedTreatments from '../../shared/RelatedTreatments/RelatedTreatments';
import FAQAccordion from '../../shared/FAQAccordion/FAQAccordion';
import FinalCTA from '../../shared/FinalCTA/FinalCTA';
import styles from './TreatmentDetailPage.module.css';

export default function TreatmentDetailPage({ data }) {
  if (!data) return null;

  const {
    category,
    categoryLabel,
    slug,
    route,
    title,
    description,
    image,
    quickFacts,
    benefits,
    ideal,
    specs,
    faq,
    related,
    whatIs,
    problemContext,
    cta
  } = data;

  // 1. Map breadcrumbs safely (supporting link or to properties)
  const breadcrumbItems = [
    { label: 'Inicio', to: '/' },
    { label: categoryLabel, to: `/${category === 'laserYLuz' ? 'laser-y-luz' : category === 'dentalEstetico' ? 'dental-estetico' : category}` },
    { label: title, to: route }
  ];

  // 2. Format benefits list for BenefitColumns (from string list to object list)
  const formattedBenefits = benefits.map((b, idx) => ({
    title: typeof b === 'string' ? b : b.title,
    body: typeof b === 'string' ? '' : b.body
  }));

  // 3. Format Before & After item paths safely
  const categoryFolder = category === 'laserYLuz' ? 'laser-y-luz' : category;
  const beforeAfterItems = [
    {
      before: `/assets/images/treatments/${categoryFolder}/${slug}/before-after-1.jpg`,
      after: `/assets/images/treatments/${categoryFolder}/${slug}/before-after-2.jpg`
    }
  ];

  const beforeAfterDisclaimer = "Las fotografías de antes y después y los testimonios pueden reflejar experiencias individuales reales, pero son solo ejemplos. Los resultados varían y no están garantizados.";

  // 4. Default safe Process Steps for the timeline
  const defaultProcessSteps = [
    {
      number: '01',
      title: 'VALORACIÓN',
      body: 'Evaluamos visualmente las necesidades específicas de tu rostro o cuerpo y comprendemos tus objetivos.'
    },
    {
      number: '02',
      title: 'PLAN ESPECÍFICO',
      body: 'Definimos el protocolo y la combinación idónea de activos o aparatología adaptada a tu caso.'
    },
    {
      number: '03',
      title: 'TRATAMIENTO',
      body: 'Aplicamos detalladamente el protocolo bajo estrictos estándares de higiene, cuidado y confort.'
    },
    {
      number: '04',
      title: 'SEGUIMIENTO',
      body: 'Te proporcionamos pautas específicas para prolongar los resultados en casa y agendar tus próximas visitas.'
    }
  ];

  return (
    <div className={styles.detailWrapper}>
      
      {/* 1. Breadcrumb (Clinical Canvas Surface: #F2F0F1) */}
      <div className={styles.breadcrumbBg}>
        <div className={styles.container}>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* 2. Treatment Hero (Clinical Canvas Surface: #F2F0F1) */}
      <TreatmentHero 
        categoryLabel={categoryLabel}
        title={title}
        description={description}
        image={image}
        disclaimer={cta.disclaimer}
      />

      {/* 3. Treatment Quick Facts (Off White Surface: #EFEFEB) */}
      <div className={styles.quickFactsBg}>
        <TreatmentQuickFacts facts={quickFacts} variant="light" />
      </div>

      {/* Clinical Note Block (Editorial, Subtle border, Small but readable copy) */}
      <div className="bg-[#F2F0F1] py-8 border-b border-[#363633]/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          <div className="p-6 border border-[#363633]/15 bg-[#EFEFEB] max-w-3xl">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141313] mb-1.5">Nota clínica:</h4>
            <p className="text-xs text-[#4E4D4D] leading-relaxed font-light">
              Los resultados pueden variar según las características individuales de la piel, el protocolo recomendado y el cumplimiento de las indicaciones pre y post-tratamiento. Ningún contenido de este sitio garantiza resultados específicos.
            </p>
          </div>
        </div>
      </div>

      {/* 4. What The Treatment Is (Clinical Canvas Surface: #F2F0F1) */}
      <section className={styles.whatIsSection}>
        <div className={styles.container}>
          <div className={styles.whatIsGrid}>
            <div className={styles.whatIsContent}>
              <SectionHeader 
                eyebrow={whatIs.eyebrow}
                title={whatIs.headline}
                support={whatIs.body}
                variant="light"
              />
            </div>
            <div className={styles.whatIsMedia}>
              <MediaBlock 
                src={image} 
                alt={title} 
                aspectRatio="4/3" 
                variant="light"
                className={styles.whatIsImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Problem / Condition Context (Dark Authority Surface: #141313) */}
      <section className={styles.problemSection}>
        <div className={styles.narrowContainer}>
          <SectionHeader 
            eyebrow={problemContext.eyebrow}
            title={problemContext.headline}
            support={problemContext.body}
            variant="dark"
            align="center"
          />
        </div>
      </section>

      {/* 6. Main Benefits (Clinical Canvas Surface: #F2F0F1) */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <BenefitColumns 
            items={formattedBenefits}
            variant="light"
            showNumbers={true}
            sectionHeader={{
              eyebrow: 'PROPIEDADES',
              title: `BENEFICIOS PRINCIPALES DE ${title}`
            }}
          />
        </div>
      </section>

      {/* 7. How The Treatment Works (Off White Surface: #EFEFEB) */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <ProcessTimeline 
            eyebrow="EL PROCESO"
            title={`CÓMO FUNCIONA EL PROTOCOLO DE ${title}`}
            support="Cada visita en Derma.M está orquestada para garantizar la máxima seguridad, comodidad y un resultado satisfactorio y personalizado."
            steps={defaultProcessSteps}
            variant="light"
            layout="horizontal"
          />
        </div>
      </section>

      {/* 8. Who This Treatment Is For (Clinical Canvas Surface: #F2F0F1) */}
      <section className={styles.whoForSection}>
        <div className={styles.narrowContainer}>
          <SectionHeader 
            eyebrow="PARA QUIÉN ES"
            title="INDICACIONES ESTÉTICAS RECOMENDADAS"
            variant="light"
            align="left"
          />
          <ul className={styles.whoForList}>
            <li className={styles.whoForItem}>
              <span className={styles.dash}>—</span>
              <p className={styles.whoForText}>{ideal}</p>
            </li>
            <li className={styles.whoForItem}>
              <span className={styles.dash}>—</span>
              <p className={styles.whoForText}>Quienes desean confiar el cuidado de su tejido cutáneo a aparatología dermoestética calificada.</p>
            </li>
            <li className={styles.whoForItem}>
              <span className={styles.dash}>—</span>
              <p className={styles.whoForText}>Personas en búsqueda de enfoques higiénicos y dermoprotectores que no requieran tiempo de descanso ni agujas invasivas profundas.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* 9. When It Is Not Recommended (Warm Light Surface: #CCC9C1) */}
      <section className={styles.warningSection}>
        <div className={styles.narrowContainer}>
          <WarningBox variant="warm" />
        </div>
      </section>

      {/* 10. Treatment Specs (Clinical Canvas Surface: #F2F0F1) */}
      <section className={styles.specsSection}>
        <div className={styles.container}>
          <SpecsGrid 
            headline="FICHA TÉCNICA DEL TRATAMIENTO"
            specs={specs}
            variant="light"
          />
        </div>
      </section>

      {/* 11. Before & After (Dark Authority Surface: #141313) */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.container}>
          <BeforeAfterGrid 
            eyebrow="EVIDENCIA DE APOYO"
            headline="EVOLUCIÓN Y RESULTADOS ASISTIDOS"
            items={beforeAfterItems}
            disclaimer={beforeAfterDisclaimer}
          />
        </div>
      </section>

      {/* 12. Related Treatments (Clinical Canvas Surface: #F2F0F1) */}
      <RelatedTreatments 
        items={related} 
        headline={`TRATAMIENTOS DE ${categoryLabel} COMPLEMENTARIOS`}
      />

      {/* 13. FAQ (Off White Surface: #EFEFEB) */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <FAQAccordion 
            headline="PREGUNTAS FRECUENTES"
            items={faq}
          />
        </div>
      </section>

      {/* 14. Final CTA (Dark Authority Surface: #141313) */}
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
