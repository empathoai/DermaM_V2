import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function TermsOfUse() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  
  const sections = [
    {
      id: "acceptance",
      shortTitle: "Aceptación",
      title: "Aceptación de los Términos / Acceptance of Terms",
      content: (
        <>
          <p>
            Al acceder, navegar o utilizar este sitio web, usted reconoce que ha leído, comprendido y aceptado las obligaciones contenidas en los presentes Términos de Uso. Si no está de acuerdo con estos términos o alguna parte de los mismos, debe abstenerse de utilizar nuestro sitio web y los canales de comunicación asociados de inmediato.
          </p>
          <p className="italic text-xs text-[#363633]/70 mt-4">
            By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms or any part of them, you must immediately cease using our website and associated communication channels.
          </p>
        </>
      )
    },
    {
      id: "identity",
      shortTitle: "Identidad",
      title: "Identidad del Propietario del Sitio / Business Identity",
      content: (
        <>
          <p>
            Este sitio web es propiedad de y está operado por <strong>DERMA.M, LLC</strong>, una Compañía de Responsabilidad Limitada del Estado de Florida, con sede principal en:
          </p>
          <div className="p-4 border border-[#363633]/10 bg-[#EFEFEB] mt-2 space-y-1 text-xs">
            <p><strong>Razón Social:</strong> DERMA.M, LLC</p>
            <p><strong>Número de Documento del Estado de Florida:</strong> L21000435735</p>
            <p><strong>Dirección Física Registrada:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
            <p><strong>Correo Electrónico de Contacto:</strong> info@dermamskinhealth.com</p>
            <p><strong>Teléfono Directo:</strong> +1 561 253 5384</p>
          </div>
        </>
      )
    },
    {
      id: "no-medical-advice",
      shortTitle: "No es Asesoría",
      title: "Uso del Contenido es Informativo y Ausencia de Relación Médico-Paciente / Informational & No Medical Advice Disclaimer",
      content: (
        <>
          <div className="p-5 border border-[#363633]/20 bg-[#EFEFEB] text-xs space-y-4 my-2 font-sans">
            <p className="font-semibold">SPANISH DISCLOSURE / ADVERTENCIA EN ESPAÑOL:</p>
            <p className="italic font-medium text-[#141313]">
              "La información en este sitio web se ofrece únicamente con fines educativos e informativos generales. No constituye asesoramiento médico, diagnóstico ni tratamiento. Usar este sitio web, enviar un formulario, escribir por email o contactar a DERMA.M por WhatsApp no crea una relación proveedor-paciente."
            </p>
            <p className="border-t border-[#363633]/10 pt-4 font-semibold">ENGLISH DISCLOSURE / ADVERTENCIA EN INGLÉS:</p>
            <p className="italic font-medium text-[#141313]">
              "The information on this website is provided for general educational and informational purposes only. It is not medical advice, diagnosis, or treatment. Using this website, submitting a form, sending an email, or contacting DERMA.M through WhatsApp does not create a provider-patient relationship."
            </p>
          </div>
          <p className="mt-4">
            Cualquier evaluación clínica o recomendación personalizada de tratamientos estéticos de cuidado de la piel requiere obligatoriamente una consulta presencial con el personal clínico licenciado de DERMA.M, LLC, donde se evaluará su expediente personal y contraindicaciones de manera formal e individualizada.
          </p>
        </>
      )
    },
    {
      id: "appointments",
      shortTitle: "Citas y Reservas",
      title: "Solicitaciones y Disponibilidad de Citas / Appointment Requests & Availability",
      content: (
        <>
          <p>
            El envío de una solicitud de cita a través de nuestros formularios en línea o por canales directos (WhatsApp/llamadas) constituye una precandidatura y no un compromiso vinculante de reserva de espacio. La cita quedará formalmente confirmada únicamente al cumplirse los requisitos operativos de depósito financiero de fianza descritos en nuestra <Link to="/booking-cancellation-refund-policy" className="underline font-normal">Política de Reserva y Cancelaciones</Link> y con la correspondiente validación de agenda del centro.
          </p>
          <p>
            DERMA.M, LLC se reserva el derecho de rechazar de forma discrecional o cancelar servicios de reserva debido a incongruencias médicas clínicamente identificadas por razones de seguridad de la salud del paciente.
          </p>
        </>
      )
    },
    {
      id: "user-responsibilities",
      shortTitle: "Responsabilidades",
      title: "Responsabilidades del Usuario / User Responsibilities",
      content: (
        <>
          <p>
            Usted se compromete a utilizar este sitio únicamente para fines lícitos. Está terminantemente prohibido utilizar la plataforma para:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Subir, transmitir o divulgar información falsa, spam o contenidos difamatorios e ilegales.</li>
            <li>Robar credenciales o simular falsas representaciones o usurpación de identidad de terceros.</li>
            <li>Inyectar archivos con código potencialmente dañino (virus, troyanos, ransomware) que afecte el servidor y hosting.</li>
            <li>Copiar o raspar ("scraping") masivamente de manera automatizada bases de datos e imágenes estéticas de nuestro portal.</li>
          </ul>
        </>
      )
    },
    {
      id: "intellectual-property",
      shortTitle: "Propiedad Intelectual",
      title: "Derechos de Propiedad Intelectual / Intellectual Property",
      content: (
        <>
          <p>
            Todo el material expuesto en este sitio web, incluyendo textos explicativos de técnicas clínicas, diseños, logotipos comerciales de DERMA.M, interfaces de usuario, material gráfico, imágenes fotográficas, códigos de programación e ilustraciones, son propiedad exclusiva de <strong>DERMA.M, LLC</strong> o de sus licenciantes asociados.
          </p>
          <p>
            Está estrictamente prohibida la reproducción, duplicación, distribución nacional o internacional, retransmisión o alteración de cualquier porción de la web sin nuestro previo consentimiento explícito de puño y letra por parte de la directiva de DERMA.M, LLC.
          </p>
        </>
      )
    },
    {
      id: "results-photos",
      shortTitle: "Resultados y Fotos",
      title: "Información sobre Tratamientos y Fotos de 'Antes y Después' / Treatments & Before/After Disclaimer",
      content: (
        <>
          <p>
            Las fotografías estéticas que muestren resultados clínicos de "Antes y Después" se presentan estrictamente para fines ilustrativos y ejemplares de las capacidades estéticas de los tratamientos ofrecidos por nuestro personal cualificado:
          </p>
          <blockquote className="border-l-4 border-[#363633]/30 pl-4 py-1 italic my-4 text-xs space-y-2 text-[#363633]/80 font-sans">
            <p><strong>ESPAÑOL:</strong> "Las fotografías de antes y después y los testimonios pueden reflejar experiencias individuales reales, pero son solo ejemplos. Los resultados varían y no están garantizados."</p>
            <p><strong>ENGLISH:</strong> "Before-and-after photographs and testimonials may reflect real individual experiences, but they are examples only. Results vary and are not guaranteed."</p>
          </blockquote>
          <p>
            Su idoneidad ante un protocolo específico para la piel o el cuerpo de DERMA.M depende exclusivamente de rasgos biológicos individuales y del cumplimiento irrestricto de las directrices pre-tratamiento y post-tratamiento indicadas por el experto.
          </p>
        </>
      )
    },
    {
      id: "third-party",
      shortTitle: "Terceros",
      title: "Plataformas e Hipervínculos a Terceros / Third-Party Services",
      content: (
        <>
          <p>
            Nuestro portal puede vincular servicios o contener enlaces directos a sitios web administrados por terceros que agilizan las operaciones de reservas y pagos (por ejemplo, pasarelas de pago seguro y calendarios de reservas integradas). 
          </p>
          <p>
            <strong>DERMA.M, LLC</strong> no asume responsabilidad alguna respecto del funcionamiento técnico, validez de certificados SSL, disponibilidad operativa, prácticas de protección de datos personales o políticas legales de dichos sitios externos de software. El acceso y uso de los mismos corre bajo la exclusiva cuenta y riesgo del usuario.
          </p>
        </>
      )
    },
    {
      id: "liability",
      shortTitle: "Limitación de Responsabilidad",
      title: "Limitación de Responsabilidad / Limitation of Liability",
      content: (
        <>
          <p>
            En la máxima medida autorizada por las leyes del Estado de Florida, <strong>DERMA.M, LLC</strong>, sus directores, médicos, esteticistas, empleados, representantes y agentes asociados no serán responsables de ningún daño directo, indirecto, incidental, punitivo, especial o consecuencial que surja del uso o de la imposibilidad de uso de este sitio web o sus canales digitales asociados. El uso de la información presente en esta web se realiza bajo estricto riesgo o arbitrio voluntario personal del usuario.
          </p>
        </>
      )
    },
    {
      id: "governing-law",
      shortTitle: "Ley y Jurisdicción",
      title: "Legislación Aplicable y Jurisdicción / Governing Law & Venue",
      content: (
        <>
          <p>
            Estos Términos de Uso y cualquier relación de controversia derivada del acceso de este portal se regirán y serán interpretados bajo las leyes del <strong>Estado de Florida</strong>, Estados Unidos de América.
          </p>
          <p>
            Cualquier procedimiento o litigio legal que vincule la interpretación o validez de estos términos será ventilado exclusivamente ante las cortes estatales y federales correspondientes radicadas en el <strong>Condado de Palm Beach (Palm Beach County, Florida)</strong>, renunciando de manera expresa el usuario a cualquier otra circunscripción o fuero internacional.
          </p>
        </>
      )
    },
    {
      id: "changes",
      shortTitle: "Modificaciones",
      title: "Cambios en los Presentes Términos / Changes to These Terms",
      content: (
        <>
          <p>
            Nos reservamos la facultad discrecional de modificar, alterar, suprimir o actualizar estos Términos de Uso de forma parcial o total en cualquier momento sin previa notificación individualizada. Dichas variantes cobrarán plena validez legal con su sola publicación y actualización de fecha en este portal. Le sugerimos revisar esta sección periódicamente.
          </p>
        </>
      )
    },
    {
      id: "contact",
      shortTitle: "Contacto",
      title: "Información de Contacto para Soporte Legal / Contact Information",
      content: (
        <>
          <p>
            Para consultas relacionadas con estos Términos de Uso o sugerencias, comuníquese cordialmente a través de:
          </p>
          <div className="p-5 border border-[#363633]/10 bg-[#EFEFEB] text-xs mt-4">
            <p className="font-semibold uppercase tracking-wider text-[#141313] mb-2">DERMA.M, LLC</p>
            <p className="mb-1"><strong>Dirección:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
            <p className="mb-1"><strong>Teléfono:</strong> +1 561 253 5384</p>
            <p className="mb-1"><strong>Correo de Contacto:</strong> info@dermamskinhealth.com</p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] selection:bg-[#CCC9C1]">
      <Helmet>
        <title>Términos de Uso | DERMA.M LLC Florida</title>
        <meta name="description" content="Términos de uso para navegar el sitio oficial de DERMA.M, LLC, su desvinculación médica y jurisdicción en Palm Beach County, Florida." />
        {siteUrl && <link rel="canonical" href={`${siteUrl}/terms-of-use`} />}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <LegalPageLayout
          title="Términos de Uso"
          subtitle="Términos legales de navegación y avisos de limitación de responsabilidad médica del portal DERMA.M."
          effectiveDate="10 de Octubre de 2021"
          lastUpdated="17 de Junio de 2026"
          attorneyReviewRequired={true}
          attorneyCalloutText="[REVISIÓN LEGAL REQUERIDA: Revise si es necesario incorporar una cláusula de renuncia a demandas colectivas corporativas o un acuerdo formal de arbitraje vinculante según normativas vigentes del Estado de Florida.]"
          sections={sections}
        />
      </main>
      
      <Footer />
    </div>
  );
}
