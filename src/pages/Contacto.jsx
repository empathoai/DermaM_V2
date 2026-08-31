import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MapPin,
  Clock,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import FAQAccordion from '../components/shared/FAQAccordion/FAQAccordion';
import FinalCTA from '../components/shared/FinalCTA/FinalCTA';
import HeroMedia from '../components/utils/HeroMedia';
import styles from './Contacto.module.css';
import { contactFaq } from '../data/contactPage';
import { organizationNode } from '../data/organizationSchema';

export default function ContactoPage() {
  const [mapInteractive, setMapInteractive] = useState(false);

  const formattedWhatsAppUrl = 'https://wa.me/15612535384?text=Hola,%20quiero%20agendar%20una%20evaluaci%C3%B3n%20personalizada%20con%20DERMA.M.';
  const dialPhoneUrl = 'tel:+15612535384';
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const contactHeroImage = '/assets/images/contact/hero.jpg';
  const contactCtaImage = '/assets/images/contact/cta.jpg';

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Contacto | Derma.M</title>
        <meta name="description" content="Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach." />
        <link rel="canonical" href="https://dermamskinhealth.com/contacto" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contacto | Derma.M" />
        <meta property="og:description" content="Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/contacto" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | Derma.M" />
        <meta name="twitter:description" content="Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            organizationNode,
            {
              "@type": "ContactPage",
              "@id": "https://dermamskinhealth.com/contacto#contactpage",
              "name": "Contacto | Derma.M",
              "url": "https://dermamskinhealth.com/contacto",
              "description": "Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach, Florida.",
              "mainEntity": { "@id": "https://dermamskinhealth.com/#organization" }
            }
          ]
        })}</script>
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        <div className={styles.contactPage}>

          {/* 1. Contact Hero Section */}
          <section className={styles.heroSection} aria-labelledby="contact-hero-heading">
            <div className={styles.heroBackground} aria-hidden="true">
              <HeroMedia src={contactHeroImage} alt="" className={styles.heroMedia} />
            </div>
            <div className={styles.heroOverlay} aria-hidden="true"></div>
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrowWrapper}>
                  <div className={styles.eyebrowLine}></div>
                  <span className={styles.eyebrow}>Contacto</span>
                </div>
                <h1 id="contact-hero-heading" className={styles.heroTitle}>
                  Agenda tu evaluación personalizada
                </h1>
                <p className={styles.heroBody}>
                  En DERMA.M estamos listas para ayudarte a cuidar tu piel con una atención dermoestética avanzada, cercana y profesional. Escríbenos y nuestro equipo te orientará para encontrar el protocolo ideal para ti.
                </p>
                <div className={styles.heroCtaGroup}>
                  <a
                    href={formattedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryBtn}
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+15612535384"
                    className={styles.secondaryBtn}
                  >
                    561 253 5384
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Two-Column Core Block: Start block on Left, WPB Location Card & Map on Right */}
          <section className={styles.twoColumnCoreBlock}>
            <div className={styles.twoColumnContainer}>
              <div className={styles.twoColumnGrid}>

                {/* Left: Start block */}
                <div className={styles.formColumn}>
                  <div className={styles.startBlock}>
                    <h2 className="font-sans text-xl uppercase tracking-wider text-[#363633] mb-2">
                      Empieza tu evaluación
                    </h2>
                    <p className={styles.startBlockIntro}>
                      Reserva tu cita en línea o escríbenos si prefieres consultar primero. Te atendemos en español e inglés.
                    </p>
                    <div className={styles.startActions}>
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.startBtn} ${styles.startBtnPrimary}`}
                      >
                        Agenda tu valoración
                      </a>
                      <a
                        href={formattedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.startBtn} ${styles.startBtnSecondary}`}
                      >
                        WhatsApp
                      </a>
                    </div>
                    <p className={styles.startMicrocopy}>
                      Continúas en Square, nuestra plataforma de reservas.
                    </p>
                    <p className={styles.startPhoneLine}>
                      ¿Prefieres llamar?{' '}
                      <a href={dialPhoneUrl} className={styles.startPhoneLink}>561 253 5384</a>
                    </p>
                  </div>
                </div>

                {/* Right: Sede West Palm Beach */}
                <div className={styles.locationCard}>
                    <div className={styles.badgeRow}>
                      <span className={styles.badgeActive}>Sede Principal</span>
                    </div>
                    <h3 className={styles.locName}>West Palm Beach</h3>

                    <div className={styles.locDetailsList}>
                      <div className={styles.locDetailItem}>
                        <span className={styles.detailLabel}>Dirección</span>
                        <span className={styles.detailValue}>
                          5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405
                        </span>
                      </div>
                      <div className={styles.locDetailItem}>
                        <span className={styles.detailLabel}>Teléfono / WhatsApp</span>
                        <span className={styles.detailValue}>561 253 5384</span>
                      </div>
                      <div className={styles.locDetailItem}>
                        <span className={styles.detailLabel}>Email</span>
                        <span className={styles.detailValue}>info@dermamskinhealth.com</span>
                      </div>
                      <div className={styles.locDetailItem}>
                        <span className={styles.detailLabel}>Horario</span>
                        <span className={styles.detailValue}>Lun-Sáb 9:00 AM – 5:00 PM · Dom 9:00 AM – 1:00 PM</span>
                      </div>
                    </div>

                    <div className={styles.locBtnGroup}>
                      <a
                        href="https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.locBtnPrimary}
                      >
                        Cómo llegar
                      </a>
                    </div>
                </div>
              </div>

              {/* Full-width map below both cards */}
              <div className={styles.mapCardSection}>
                    <div className={styles.mapTitleBar}>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <h4 className={styles.mapHeading}>Ubicación en West Palm Beach</h4>
                      </div>
                      <a
                        href="https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-wider flex items-center gap-1 text-[#CCC9C1] hover:text-[#F2F0F1] transition"
                      >
                        Abrir <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className={styles.interactiveMapContainer}>
                      {/* Mobile Interaction Shield (Prevents scroll/drag/gestures hijacking) */}
                      {!mapInteractive && (
                        <div
                          className="absolute inset-0 bg-[#363633]/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer z-10 transition hover:bg-[#363633]/50 p-4"
                          onClick={() => setMapInteractive(true)}
                        >
                          <button
                            className="bg-[#141313] text-[#F2F0F1] uppercase text-xs tracking-widest px-6 py-3 border border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMapInteractive(true);
                            }}
                          >
                            Interactuar con mapa
                          </button>
                        </div>
                      )}

                      <iframe
                        title="Ubicación de Derma.M West Palm Beach"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.050478749377!2d-80.0543666!3d26.6531589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d73b573a9e3b%3A0x63fdcfda5a703dca!2s5707%20S%20Dixie%20Hwy%20UNIT%20D%2C%20West%20Palm%20Beach%2C%20FL%2033405!5e0!3m2!1ses!2sus!4v1700000000000!5m2!1ses!2sus"
                        className={styles.mapWpbIframe}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ pointerEvents: mapInteractive ? 'auto' : 'none' }}
                      ></iframe>
                    </div>
              </div>

            </div>
          </section>

          {/* 3. FAQ Section */}
          <FAQAccordion
            headline={contactFaq.headline}
            items={contactFaq.items}
          />

          {/* 4. Final CTA Section */}
          <FinalCTA
            title="¿Lista para dar el siguiente paso?"
            body="Estamos aquí para acompañarte en el camino hacia una piel más sana, dándole un cuidado profesional con propósito."
            backgroundImage={contactCtaImage}
            primaryCta="Agenda tu valoración"
            primaryLink={bookingUrl}
            variant="dark"
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}
