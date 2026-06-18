import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function Accessibility() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  
  const sections = [
    {
      id: "commitment",
      shortTitle: "Compromiso",
      title: "Nuestro Compromiso con la Accesibilidad / Our Commitment to Accessibility",
      content: (
        <>
          <div className="p-5 border border-[#363633]/20 bg-[#EFEFEB] text-xs space-y-4 my-2 font-sans leading-relaxed">
            <p className="font-bold uppercase tracking-wider text-[#141313]">[SPANISH CLAUSE / CLÁUSULA EN ESPAÑOL]:</p>
            <p className="italic font-medium text-[#141313]">
              "DERMA.M se compromete a hacer que su sitio web sea accesible y fácil de usar para todos los visitantes. Trabajamos continuamente para mejorar la accesibilidad, usabilidad y compatibilidad de nuestro sitio web."
            </p>
            <p className="border-t border-[#363633]/10 pt-4 font-bold uppercase tracking-wider text-[#141313]">[ENGLISH CLAUSE / CLÁUSULA EN INGLÉS]:</p>
            <p className="italic font-medium text-[#141313]">
              "DERMA.M is committed to making its website accessible and user-friendly for all visitors. We are continuously working to improve the accessibility, usability, and compatibility of our website."
            </p>
          </div>
          <p className="mt-4">
            Nuestro objetivo es facilitar que todas las audiencias naveguen de forma inclusiva por nuestros contenidos dermatológicos y de bienestar, independientemente de sus capacidades físicas, visuales, auditivas, cognitivas o tecnológicas.
          </p>
        </>
      )
    },
    {
      id: "standards",
      shortTitle: "Estándares Web",
      title: "Esfuerzos y Estándares Técnicos de Referencia / Accessibility Standards",
      content: (
        <>
          <p>
            Hacemos esfuerzos continuos para aplicar pautas de accesibilidad digital y mejorar progresivamente las interfaces digitales. Tomamos como referencia de optimización técnica las directrices de accesibilidad para el contenido web (<strong>WCAG 2.1</strong> en su nivel de conformidad técnica <strong>AA</strong>), desarrolladas por el consorcio internacional W3C. 
          </p>
          <p>
            Entre las características que hemos diseñado e implementado de forma activa en nuestra plataforma se encuentran:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Contraste cromático elevado en la tipografía editorial para facilitar la lectura de baja visión.</li>
            <li>Uso consistente de etiquetas alt ("texto alternativo") descriptivas en recursos iconográficos e imágenes clínicas.</li>
            <li>Estructura jerárquica limpia con etiquetas semánticas y asignación clara de roles.</li>
            <li>Compatibilidad básica con navegación por teclado y lectores de pantalla estándar para sistemas operativos de escritorio y móviles.</li>
            <li>Estilo libre de animaciones parpadeantes o de alto contraste agresivo de destellos.</li>
          </ul>
        </>
      )
    },
    {
      id: "ongoing",
      shortTitle: "Mejora Continua",
      title: "Mejoras y Auditorías Continuas / Ongoing Improvements",
      content: (
        <>
          <p>
            La accesibilidad en el desarrollo web es un proceso dinámico y continuo. Con frecuencia realizamos pruebas y revisiones de usabilidad para detectar posibles barreras técnicas e inconsistencias visuales que surjan al integrar nuevas secciones, tecnologías o navegadores móviles de última generación en el sitio.
          </p>
        </>
      )
    },
    {
      id: "assistance",
      shortTitle: "Asistencia",
      title: "Retroalimentación y Asistencia de Accesibilidad / Feedback & Direct Assistance",
      content: (
        <>
          <p>
            Si usted experimenta cualquier dificultad de visualización o navegación en alguna sección específica de este sitio oficial de DERMA.M, LLC, o si tiene alguna recomendación de cómo optimizar la accesibilidad inclusiva del portal, por favor contáctenos de inmediato por correo electrónico o por vía telefónica.
          </p>
          <p>
            Al reportarnos una barrera de accesibilidad, le agradeceríamos especificar de forma detallada la página o elemento exacto (especificando si navega desde móvil o escritorio) que provocó el bloqueo técnico, a fin de que nuestro equipo de soporte informático responda y resuelva el inconveniente con la mayor diligencia posible.
          </p>
        </>
      )
    },
    {
      id: "contact",
      shortTitle: "Contacto",
      title: "Información para Contactar con Soporte de Accesibilidad / Contact Information",
      content: (
        <>
          <p>
            Para reportes de accesibilidad o asistencia especial para coordinar citas, comuníquese con nuestro equipo:
          </p>
          <div className="p-5 border border-[#363633]/10 bg-[#EFEFEB] text-xs mt-4">
            <p className="font-semibold uppercase text-[#141313] mb-2">DERMA.M, LLC</p>
            <p className="mb-1"><strong>Soporte Digital:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
            <p className="mb-1"><strong>Teléfono / WhatsApp de Apoyo:</strong> +1 561 253 5384</p>
            <p className="mb-1"><strong>Correo de Accesibilidad:</strong> info@dermamskinhealth.com</p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] selection:bg-[#CCC9C1]">
      <Helmet>
        <title>Declaración de Accesibilidad | DERMA.M LLC Florida</title>
        <meta name="description" content="Declaración de accesibilidad digital y pautas WCAG de DERMA.M, LLC para garantizar un acceso inclusivo a todos los visitantes." />
        {siteUrl && <link rel="canonical" href={`${siteUrl}/accessibility`} />}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <LegalPageLayout
          title="Declaración de Accesibilidad"
          subtitle="Compromiso y pautas de inclusión informática aplicadas al sitio de DERMA.M para garantizar facilidad de uso a todos nuestros usuarios."
          effectiveDate="10 de Octubre de 2021"
          lastUpdated="17 de Junio de 2026"
          attorneyReviewRequired={true}
          attorneyCalloutText="[REVISIÓN LEGAL REQUERIDA: Revise las directrices con un asesor legal técnico para certificar el cumplimiento digital ante leyes de accesibilidad corporativa aplicables en Florida.]"
          sections={sections}
        />
      </main>
      
      <Footer />
    </div>
  );
}
