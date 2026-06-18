import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  CalendarCheck, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import FAQAccordion from '../components/shared/FAQAccordion/FAQAccordion';
import FinalCTA from '../components/shared/FinalCTA/FinalCTA';
import styles from './Contacto.module.css';

export default function ContactoPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || '';
  const canonicalUrl = siteUrl ? `${siteUrl}/contacto` : undefined;

  const [mapInteractive, setMapInteractive] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: 'Evaluación facial',
    preferencia: 'WhatsApp',
    mensaje: '',
    marketingConsent: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Basic Validation
    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.email.trim()) {
      setFormError('Por favor complete todos los campos obligatorios (Nombre, Teléfono y Correo).');
      return;
    }

    // Simulate elite clinical submission
    setFormSubmitted(true);
  };

  const formattedWhatsAppUrl = 'https://wa.me/15612535384?text=Hola,%20quiero%20agendar%20una%20evaluaci%C3%B3n%20personalizada%20con%20DERMA.M.';
  const dialPhoneUrl = 'tel:+15612535384';

  const faqItems = [
    {
      question: '¿Necesito cita previa?',
      answer: 'Sí. Te recomendamos agendar tu cita antes de visitarnos para asegurar disponibilidad y brindarte una atención personalizada.'
    },
    {
      question: '¿Puedo consultar por WhatsApp?',
      answer: 'Sí. Puedes escribirnos por WhatsApp al +1 561 253 5384 y nuestro equipo te orientará.'
    },
    {
      question: '¿Dónde están ubicados?',
      answer: 'Actualmente nuestra ubicación activa está en 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405. Nuestra sede de Miami estará disponible próximamente.'
    },
    {
      question: '¿Qué servicios puedo consultar?',
      answer: 'Puedes consultar sobre evaluación facial, acné, manchas, cicatrices, rejuvenecimiento facial, limpiezas faciales y otros tratamientos personalizados.'
    },
    {
      question: '¿Atienden en Miami?',
      answer: 'La sede de Miami estará disponible próximamente. Por ahora puedes contactarnos por WhatsApp para recibir información o agendar en West Palm Beach.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Contacto | Derma.M</title>
        <meta name="description" content="Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach." />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="canonical" href="https://dermamskinhealth.com/contacto" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contacto | Derma.M" />
        <meta property="og:description" content="Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/contacto" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | Derma.M" />
        <meta name="twitter:description" content="Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contacto | Derma.M",
          "url": "https://dermamskinhealth.com/contacto",
          "description": "Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach y Miami, Florida.",
          "mainEntity": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Derma.M",
            "telephone": "+15612535384",
            "email": "info@dermamskinhealth.com",
            "location": [
              {
                "@type": "HealthAndBeautyBusiness",
                "name": "Derma.M — West Palm Beach",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "5707 S Dixie Hwy UNIT D",
                  "addressLocality": "West Palm Beach",
                  "addressRegion": "FL",
                  "postalCode": "33405",
                  "addressCountry": "US"
                }
              },
              {
                "@type": "HealthAndBeautyBusiness",
                "name": "Derma.M — Miami",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "4960 SW 72nd Ave Ste 203",
                  "addressLocality": "Miami",
                  "addressRegion": "FL",
                  "postalCode": "33155",
                  "addressCountry": "US"
                }
              }
            ]
          }
        })}</script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <div className={styles.contactPage}>
          
          {/* 1. Contact Hero Section */}
          <section className={styles.heroSection} aria-labelledby="contact-hero-heading">
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
                    Escríbenos por WhatsApp
                  </a>
                  <a 
                    href={dialPhoneUrl} 
                    className={styles.secondaryBtn}
                  >
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Two-Column Core Block: Form on Left, WPB Location Card & Map on Right */}
          <section className={styles.twoColumnCoreBlock}>
            <div className={styles.twoColumnContainer}>
              <div className={styles.twoColumnGrid}>
                
                {/* Left: Contact Form */}
                <div className={styles.formColumn}>
                  {formSubmitted ? (
                    <div className={styles.successMessage}>
                      <div className={styles.successIcon}>
                        <CheckCircle2 size={48} className="text-[#363633]" strokeWidth={1.5} />
                      </div>
                      <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
                      <p className={styles.successText}>
                        Gracias por escribirnos, <strong>{formData.nombre}</strong>. Nos pondremos en contacto contigo vía <strong>{formData.preferencia}</strong> lo antes posible para coordinar tu evaluación de <strong>{formData.servicio}</strong>.
                      </p>
                      <button 
                        type="button" 
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            nombre: '',
                            telefono: '',
                            email: '',
                            servicio: 'Evaluación facial',
                            preferencia: 'WhatsApp',
                            mensaje: '',
                            marketingConsent: false
                          });
                        }}
                        className={styles.submitBtn}
                        style={{ maxWidth: '240px', margin: '12px auto 0 auto' }}
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                      <h2 className="font-sans text-xl uppercase tracking-wider text-[#363633] mb-2">
                        Envíanos un mensaje
                      </h2>
                      
                      {formError && (
                        <p className="text-sm text-red-700 bg-red-50 border border-red-200 p-4 font-light">
                          {formError}
                        </p>
                      )}

                      <div className="flex flex-col gap-4">
                        <div className={styles.inputGroup}>
                          <label htmlFor="nombre" className={styles.label}>Nombre *</label>
                          <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder="Tu nombre completo"
                            required
                          />
                        </div>

                        <div className={styles.inputGroup}>
                          <label htmlFor="telefono" className={styles.label}>Teléfono *</label>
                          <input
                            id="telefono"
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder="Ej. +1 561 000 0000"
                            required
                          />
                        </div>

                        <div className={styles.inputGroup}>
                          <label htmlFor="email" className={styles.label}>Email *</label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder="ejemplo@email.com"
                            required
                          />
                        </div>

                        <div className={styles.inputGroup}>
                          <label htmlFor="servicio" className={styles.label}>Servicio de interés</label>
                          <select
                            id="servicio"
                            name="servicio"
                            value={formData.servicio}
                            onChange={handleInputChange}
                            className={styles.select}
                          >
                            <option value="Evaluación facial">Evaluación facial</option>
                            <option value="Tratamientos para acné">Tratamientos para acné</option>
                            <option value="Tratamientos para manchas">Tratamientos para manchas</option>
                            <option value="Rejuvenecimiento facial">Rejuvenecimiento facial</option>
                            <option value="Limpieza facial">Limpieza facial</option>
                            <option value="Otro">Otro</option>
                          </select>
                        </div>

                        <div className={styles.inputGroup}>
                          <label htmlFor="preferencia" className={styles.label}>Preferencia de contacto</label>
                          <select
                            id="preferencia"
                            name="preferencia"
                            value={formData.preferencia}
                            onChange={handleInputChange}
                            className={styles.select}
                          >
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="Llamada">Llamada</option>
                            <option value="Email">Email</option>
                          </select>
                        </div>

                        <div className={styles.inputGroup}>
                          <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
                          <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleInputChange}
                            className={styles.textarea}
                            placeholder="Cuéntanos un poco sobre tu piel y lo que te gustaría lograr..."
                          />
                        </div>
                      </div>

                      {/* Form-Level Clinical Disclaimer (Bilingual) */}
                      <div className="p-4 border border-[#363633]/15 bg-[#EFEFEB] text-[11px] leading-relaxed text-[#363633]/90 space-y-2">
                        <p>
                          <strong>ES:</strong> Por favor, no envíes información médica sensible, urgente o altamente confidencial a través de este formulario. Este canal es para consultas generales y coordinación de citas.
                        </p>
                        <p className="border-t border-[#363633]/10 pt-2 text-[#4E4D4D] italic">
                          <strong>EN:</strong> Please do not submit sensitive, urgent, or highly confidential medical information through this form. This channel is intended for general inquiries and appointment coordination.
                        </p>
                      </div>

                      {/* Consent checkbox for marketing communication (Bilingual, unchecked) */}
                      <div className="flex items-start gap-3 my-2">
                        <input
                          id="marketingConsent"
                          type="checkbox"
                          name="marketingConsent"
                          checked={formData.marketingConsent}
                          onChange={(e) => setFormData(prev => ({ ...prev, marketingConsent: e.target.checked }))}
                          className="mt-1 w-4 h-4 rounded-none accent-[#363633] border-[#363633]/30 cursor-pointer"
                        />
                        <label htmlFor="marketingConsent" className="text-[11px] leading-snug text-[#4E4D4D] select-none cursor-pointer">
                          <span className="block mb-1 text-[#363633]">
                            <strong>ES:</strong> Acepto recibir comunicaciones relacionadas con citas y, si lo selecciono, mensajes promocionales de DERMA.M por teléfono, SMS, WhatsApp o email. El consentimiento no es una condición de compra. Pueden aplicarse cargos por mensajes y datos. Puedo optar por no recibir comunicaciones en cualquier momento.
                          </span>
                          <span className="block italic text-[#666463]">
                            <strong>EN:</strong> I agree to receive appointment-related communications and, if selected, promotional messages from DERMA.M by phone, SMS, WhatsApp, or email. Consent is not a condition of purchase. Message and data rates may apply. I may opt out at any time.
                          </span>
                        </label>
                      </div>

                      <div className="mt-2">
                        <button type="submit" className={styles.submitBtn}>
                          Enviar solicitud
                        </button>
                        <p className={styles.microcopy}>
                          Tu información está segura y protegida bajo nuestra política de privacidad.
                        </p>
                      </div>
                    </form>
                  )}
                </div>

                {/* Right Sede West Palm Beach + Iframe Map */}
                <div className={styles.infoColumn}>
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
                        <span className={styles.detailValue}>+1 (561) 253-5384</span>
                      </div>
                      <div className={styles.locDetailItem}>
                        <span className={styles.detailLabel}>Email</span>
                        <span className={styles.detailValue}>info@dermamskinhealth.com</span>
                      </div>
                      <div className={styles.locDetailItem}>
                        <span className={styles.detailLabel}>Horario</span>
                        <span className={styles.detailValue}>Atención dermoestética con cita previa</span>
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
                      <a 
                        href={formattedWhatsAppUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.locBtnSecondary}
                      >
                        WhatsApp Directo
                      </a>
                    </div>
                  </div>

                  {/* Google Maps Container with Interactive Overlay Filter for Mobile */}
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
                          <button className="bg-[#141313] text-[#F2F0F1] uppercase text-xs tracking-widest px-6 py-3 border border-none">
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

              </div>
            </div>
          </section>

          {/* 3. Quick Action Bar */}
          <section className={styles.quickActionBar}>
            <div className={styles.quickActionContainer}>
              <div className={styles.quickActionGrid}>
                
                {/* Action 1: WhatsApp */}
                <div className={styles.quickActionItem}>
                  <MessageSquare size={28} strokeWidth={1} />
                  <h4 className={styles.quickActionTitle}>Escríbenos</h4>
                  <p className={styles.quickActionText}>Atención rápida y personalizada por WhatsApp.</p>
                  <a href={formattedWhatsAppUrl} target="_blank" rel="noopener noreferrer" className={styles.quickActionLink}>
                    Escríbenos
                  </a>
                </div>

                {/* Action 2: Phone */}
                <div className={styles.quickActionItem}>
                  <PhoneCall size={28} strokeWidth={1} />
                  <h4 className={styles.quickActionTitle}>Llámanos</h4>
                  <p className={styles.quickActionText}>Consulta y agenda llamando directamente.</p>
                  <a href={dialPhoneUrl} className={styles.quickActionLink}>
                    Llamar ahora
                  </a>
                </div>

                {/* Action 3: Email */}
                <div className={styles.quickActionItem}>
                  <Mail size={28} strokeWidth={1} />
                  <h4 className={styles.quickActionTitle}>Email</h4>
                  <p className={styles.quickActionText}>Escríbenos para dudas o cotizaciones.</p>
                  <a href="mailto:info@dermamskinhealth.com" className={styles.quickActionLink}>
                    Enviar email
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* 4. Locations: Side-by-Side Sede Details */}
          <section className={styles.locationsSection} aria-labelledby="loc-section-title">
            <div className={styles.locationsContainer}>
              <div className={styles.sectionHeaderBlock}>
                <h2 id="loc-section-title" className={styles.sectionTitle}>
                  Nuestras sedes
                </h2>
                <p className={styles.sectionIntro}>
                  Ofrecemos atención dermoestética en locaciones de primer nivel para tu total comodidad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Sede: West Palm Beach */}
                <div className={styles.locationCard}>
                  <div className={styles.badgeRow}>
                    <span className={styles.badgeActive}>Ubicación activa</span>
                  </div>
                  <h3 className={styles.locName}>DERMA.M West Palm Beach</h3>
                  
                  <div className={styles.locDetailsList}>
                    <div className={styles.locDetailItem}>
                      <span className={styles.detailLabel}>Dirección</span>
                      <span className={styles.detailValue}>
                        5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405
                      </span>
                    </div>
                    <div className={styles.locDetailItem}>
                      <span className={styles.detailLabel}>Horario</span>
                      <span className={styles.detailValue}>Atención con cita previa</span>
                    </div>
                    <div className={styles.locDetailItem}>
                      <span className={styles.detailLabel}>Contacto</span>
                      <span className={styles.detailValue}>+1 (561) 253-5384 | info@dermamskinhealth.com</span>
                    </div>
                  </div>

                  <p className={styles.locNote}>
                    Las evaluaciones de la piel se realizan con un enfoque dermoestético y planificación de cuidado responsable.
                  </p>

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

                {/* Sede: Miami */}
                <div className={styles.locationCard}>
                  <div className={styles.badgeRow}>
                    <span className={styles.badgeUpcoming}>PROXIMAMENTE en miami</span>
                  </div>
                  <h3 className={styles.locName}>DERMA.M Miami</h3>
                  
                  <p className={styles.quickText} style={{ lineHeight: '1.8', fontSize: '14px', marginBottom: '32px' }}>
                    Estamos preparando una nueva sede para seguir ofreciendo una atención dermoestética personalizada con el estándar profesional de DERMA.M. Mientras tanto, puedes agendar tu evaluación en West Palm Beach o escribirnos por WhatsApp.
                  </p>
                  
                  <div style={{ flexGrow: 1 }}></div>

                  <a 
                    href={formattedWhatsAppUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.locBtnPrimary}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Consultar disponibilidad
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* 5. FAQ Section */}
          <section className={styles.faqSection} aria-labelledby="faq-heading">
            <div className={styles.faqContainer}>
              <div className={styles.faqHeaderBlock}>
                <h2 id="faq-heading" className={styles.faqTitle}>
                  Preguntas frecuentes
                </h2>
                <div className={styles.faqDivider}></div>
              </div>
              <FAQAccordion items={faqItems} />
            </div>
          </section>

          {/* 6. Final CTA Section */}
          <FinalCTA 
            title="¿Lista para dar el siguiente paso?"
            body="Estamos aquí para acompañarte en el camino hacia una piel más sana, dándole un cuidado profesional con propósito."
            primaryCta="Agendar evaluación por WhatsApp"
            primaryLink={formattedWhatsAppUrl}
            variant="dark"
          />

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
