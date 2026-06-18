import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function PrivacyPolicy() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  
  const sections = [
    {
      id: "intro",
      shortTitle: "Introducción",
      title: "1. Introducción / Introduction",
      content: (
        <>
          <p>
            En <strong>DERMA.M, LLC</strong> respetamos tu privacidad. Esta Política de Privacidad explica qué información podemos recopilar cuando visitas nuestro sitio web o cuando decides contactarnos voluntariamente por formulario, WhatsApp, teléfono o email.
          </p>
          <p className="mt-4 font-light text-[#EFEFEB]/90">
            Nuestra web ha sido desarrollada principalmente con propósitos de difusión informativa, exhibición de nuestro catálogo de tratamientos estéticos y dermoestéticos, y como canal de comunicación para el agendamiento y la coordinación de consultas. Puedes navegar y utilizar la mayor parte de este sitio web sin necesidad de proporcionar ninguna información de identificación personal.
          </p>
          <p className="italic text-xs text-[#363633]/70 mt-4 border-t border-[#363633]/10 pt-3 font-light">
            At DERMA.M, LLC, we respect your privacy. This Privacy Policy explains what information we may collect when you visit our website or voluntarily choose to contact us via contact forms, WhatsApp, phone, or email. You can browse most of this website without submitting any personal information.
          </p>
        </>
      )
    },
    {
      id: "identity",
      shortTitle: "Identidad",
      title: "2. Identidad Comercial y Legal / Business Identity",
      content: (
        <>
          <p>
            La entidad legal responsable de la administración de este sitio web y el resguardo de la información voluntariamente aportada es:
          </p>
          <ul className="list-none space-y-2 mt-3 p-4 bg-white/50 border border-[#363633]/10 text-xs">
            <li><strong>Razón Social:</strong> DERMA.M, LLC</li>
            <li><strong>Tipo de Entidad:</strong> Florida Limited Liability Company (Compañía de Responsabilidad Limitada de Florida)</li>
            <li><strong>Número de Documento del Estado de Florida:</strong> L21000435735</li>
            <li><strong>Dirección Principal:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</li>
            <li><strong>Correo Electrónico de Contacto:</strong> <a href="mailto:info@dermamskinhealth.com" className="underline font-normal">info@dermamskinhealth.com</a></li>
            <li><strong>Teléfono / WhatsApp de Atención:</strong> +1 561 253 5384</li>
          </ul>
        </>
      )
    },
    {
      id: "collection",
      shortTitle: "Información",
      title: "3. Información que Recopilamos / Information We Collect",
      content: (
        <>
          <p>
            Podemos recopilar información a través de los canales de la web bajo los siguientes dos esquemas claramente definidos:
          </p>
          
          <h4 className="font-semibold mt-4 text-[#141313] uppercase tracking-wider text-xs">A. Información que proporcionas voluntariamente:</h4>
          <p className="mt-1">
            Recopilamos información personal únicamente cuando decides proporcionarla de manera voluntaria al interactuar con formularios de contacto, solicitar una consulta de valoración, o escribirnos directamente. Esto puede incluir:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2 text-xs text-[#4E4D4D] font-light">
            <li>Nombre y apellidos</li>
            <li>Número de teléfono (móvil o fijo)</li>
            <li>Dirección de correo electrónico (email)</li>
            <li>Servicio o tratamiento de interés seleccionado</li>
            <li>Su mensaje o comentarios de consulta general o coordinación de agenda</li>
            <li>Prefeferencia de método de contacto, si lo indica de forma explícita</li>
          </ul>
          
          <div className="p-3 border-l-2 border-[#BBB8B5] bg-white text-[11px] text-[#666463] my-4 leading-relaxed italic">
            <strong>Nota de exclusión:</strong> Este sitio web de difusión clínica actual no procesa directamente transacciones de compra, reservas con depósito embebido en pasarela de ecommerce, ni solicita ni almacena números de tarjetas de crédito o datos bancarios sensibles. Tampoco recopila expedientes clínicos o listas detalladas de historial médico a través de esta plataforma pública.
          </div>

          <h4 className="font-semibold mt-6 text-[#141313] uppercase tracking-wider text-xs">B. Información recopilada automáticamente:</h4>
          <p className="mt-1">
            Cuando navegas por nuestro sitio web, recopilamos automáticamente datos técnicos mínimos relacionados con tu sesión para velar por el correcto funcionamiento del portal. Esta información puede constar de:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2 text-xs text-[#4E4D4D] font-light">
            <li>Dirección IP pública o enmascarada</li>
            <li>Tipo y versión de su navegador web</li>
            <li>Tipo de dispositivo de acceso (móvil, tableta, ordenador) y sistema operativo</li>
            <li>Páginas visitadas, tiempos de permanencia en el sitio, y clics o botones interactuados</li>
            <li>Cookies generales del sistema o datos de flujo que controlan el rendimiento técnico del servidor</li>
          </ul>
          <p className="mt-4 text-[11px] text-[#666463] bg-[#EFEFEB] p-3 border border-[#363633]/15 font-mono">
            [CONFIRMACIÓN OPERATIVA REQUERIDA ANTES DE LA PUBLICACIÓN FINAL: Confirmar si se encuentran plenamente activos Google Analytics, Meta Pixel, Google Search Console u otros píxeles publicitarios de rastreo en el entorno de producción.]
          </p>
        </>
      )
    },
    {
      id: "usage",
      shortTitle: "Uso",
      title: "4. Cómo Usamos la Información / How We Use Information",
      content: (
        <>
          <p>
            En DERMA.M, LLC utilizamos la información recopilada de manera responsable, limitándola a los siguientes fines legítimos de atención y marketing consentido:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-xs text-[#4E4D4D] font-light">
            <li>Responder con precisión tus dudas y solicitudes enviadas sobre tratamientos estéticos.</li>
            <li>Coordinar, confirmar y agendar tus citas o evaluaciones de forma telefónica o presencial.</li>
            <li>Contactarte a través del canal de comunicación de tu preferencia (teléfono, SMS, WhatsApp o email) para brindar información dermoestética solicitada.</li>
            <li>Mejorar el diseño, la navegación, la velocidad, los contenidos y la experiencia general de los usuarios en nuestro sitio web.</li>
            <li>Monitorear el rendimiento general y resolver problemas técnicos informáticos en el portal.</li>
            <li>Garantizar la seguridad del servidor web y prevenir posibles fraudes, envíos masivos de spam o ataques de denegación de servicios.</li>
            <li>En caso de que en el futuro se planee el envío de boletines o comunicaciones promocionales, estas se realizarán estrictamente conforme al consentimiento y aprobación correspondiente concedidos previamente por el titular.</li>
          </ul>
        </>
      )
    },
    {
      id: "communication",
      shortTitle: "Canales de Contacto",
      title: "5. WhatsApp, Teléfono, SMS y Correo Electrónico / Communication Channels",
      content: (
        <>
          <p>
            Si decides comunicarte con DERMA.M a través de los enlaces de WhatsApp, llamadas telefónicas, menús interactivos o por correo electrónico directa e individualmente, se aplican los siguientes términos:
          </p>
          <p className="mt-3 font-medium text-[#141313]">
            Si nos contactas por WhatsApp, teléfono, SMS o email, podemos usar la información que compartes para responder tu consulta, orientarte sobre nuestros servicios o ayudarte a coordinar una cita.
          </p>
          
          <div className="p-4 border border-[#363633]/20 bg-[#EFEFEB] space-y-3 my-4 text-xs font-light">
            <p className="font-semibold text-[#141313] uppercase tracking-wider">Aviso Legal de Consentimiento y Uso:</p>
            <p className="italic text-[#363633] leading-relaxed">
              "Al proporcionar tu número de teléfono, aceptas que DERMA.M pueda contactarte sobre tu consulta, solicitud de cita o servicios por teléfono, SMS, WhatsApp o email. El consentimiento no es una condición de compra. Pueden aplicarse cargos por mensajes y datos. Puedes optar por no recibir comunicaciones promocionales en cualquier momento."
            </p>
            <p className="border-t border-[#363633]/10 pt-3 italic text-[#666463] leading-relaxed">
              "By providing your phone number, you agree that DERMA.M may contact you regarding your inquiry, appointment request, or services by phone, SMS, WhatsApp, or email. Consent is not a condition of purchase. Message and data rates may apply. You may opt out of promotional communications at any time."
            </p>
          </div>
          
          <p className="text-xs text-[#4E4D4D] font-light">
            No utilizaremos tu número de teléfono para enviar campañas automatizadas de publicidad invasiva o masiva sin tu consentimiento formal e inequívoco obtenido previamente mediante las casillas de verificación opcionales aportadas para tal fin.
          </p>
        </>
      )
    },
    {
      id: "medical-info",
      shortTitle: "Información Médica",
      title: "6. Información Médica Sensible / Sensitive Medical Information",
      content: (
        <>
          <div className="p-4 border border-red-950/20 bg-[#EFEFEB] space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-red-900 block">
              ADVERTENCIA CLÍNICA IMPORTANTE / ESSENTIAL CLINICAL DISCLOSURE
            </span>
            <p className="text-xs font-semibold text-[#363633] uppercase tracking-wider">
              [POR FAVOR, LEA DETENIDAMENTE / PLEASE READ CAREFULLY:]
            </p>
            <p className="text-xs italic text-[#363633] leading-relaxed font-normal">
              "Por favor, no envíes información médica sensible, urgente o altamente confidencial a través de formularios, WhatsApp, SMS o email. Estos canales están destinados a consultas generales y coordinación de citas. La información enviada por estos canales no reemplaza una evaluación profesional presencial o una consulta directa con un proveedor calificado."
            </p>
          </div>
          <p className="mt-4 text-xs text-[#4E4D4D] leading-relaxed font-light">
            Los formularios web, los canales convencionales de correo electrónico digital y los chats de mensajería instantánea abiertos no constituyen herramientas con cifrado de grado hospitalario cerrado ni plataformas adaptadas para la transmisión de expedientes clínicos formales. Cualquier historia dermoestética integral, consentimiento informado procedural, o evaluación exhaustiva de salud cutánea será recolectada de forma estrictamente privada y presencial durante tu visita a nuestra clínica por el profesional médico a cargo.
          </p>
        </>
      )
    },
    {
      id: "cookies-analytics",
      shortTitle: "Cookies",
      title: "7. Cookies y Analítica / Cookies & Analytics",
      content: (
        <>
          <p>
            Nuestro sitio puede utilizar cookies o herramientas de análisis para comprender el uso del sitio y mejorar su funcionamiento. Las cookies son pequeños archivos de datos guardados temporalmente en el dispositivo de consulta del usuario para recordar preferencias estéticas o conservar sesiones de navegación.
          </p>
          <p className="mt-3">
            Tienes la plena facultad de configurar tu navegador de internet en cualquier momento para impedir, bloquear o eliminar de forma selectiva estas cookies; sin embargo, toma en consideración que desactivar ciertas características puede mermar o interrumpir el funcionamiento óptimo de ciertos apartados interactivos de nuestra web.
          </p>
          <p className="mt-4 text-[11px] text-[#666463] bg-[#EFEFEB] p-3 border border-[#363633]/15 font-mono">
            [CONFIRMACIÓN DE HERRAMIENTAS ACTIVAS: Confirmar si se utilizan activamente e integrar en este apartado las secuencias o tecnologías de terceros específicos tales como Google Analytics, Meta Pixel, Google Search Console, widgets o software CRM de reservas externas.]
          </p>
        </>
      )
    },
    {
      id: "sharing-data",
      shortTitle: "Intercambio",
      title: "8. Cómo Compartimos la Información / How We Share Information",
      content: (
        <>
          <p className="font-semibold text-[#141313]">
            DERMA.M no vende ni alquila tu información personal.
          </p>
          <p className="mt-2 text-xs text-[#4E4D4D] font-light">
            No comercializamos tu información personal ante terceras marcas ni la rentamos con propósitos publicitarios masivos. Exclusivamente comunicamos información restringida a los siguientes colaboradores operativos y bajo estrictas protecciones de confidencialidad contractual:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-xs text-[#4E4D4D] font-light">
            <li><strong>Proveedores de Alojamiento y Soporte Técnico:</strong> Plataformas y servicios dadores de cloud hosting o hosting de bases de datos que permiten la disponibilidad ininterrumpida de nuestro sitio web en internet.</li>
            <li><strong>Sistemas de Envío de Mensajería e Email:</strong> Servicios técnicos encargados de canalizar de forma encriptada las respuestas o alertas enviadas a través del formulario de contacto.</li>
            <li><strong>Obligaciones Legales Imperativas:</strong> Revelaremos información únicamente si la legislación vigente u ordenanzas judiciales formales del Estado de Florida o de las autoridades federales de EE.UU. así lo requieren expresamente para salvaguardar la ley, la seguridad pública o amparar los derechos de DERMA.M, LLC.</li>
          </ul>
        </>
      )
    },
    {
      id: "retention-data",
      shortTitle: "Retención",
      title: "9. Retención de Información / Information Retention",
      content: (
        <>
          <p>
            Conservamos la información personal solo durante el tiempo razonablemente necesario para responder consultas, coordinar servicios, mantener registros administrativos internos o cumplir obligaciones legales aplicables. Una vez completado dicho periodo, o ante su solicitud explícita de remoción, sus datos serán eliminados o desasociados de forma técnica de nuestras plataformas de atención web de rutina.
          </p>
        </>
      )
    },
    {
      id: "security-data",
      shortTitle: "Seguridad",
      title: "10. Seguridad / Security",
      content: (
        <>
          <p>
            Aplicamos medidas razonables para proteger la información que se comparte con nosotros. Esto incluye el resguardo físico, medidas lógicas de servidor y cifrado estándar SSL en nuestros formularios web de contacto. Sin embargo, debes comprender que ningún método de transmisión por internet, WhatsApp, SMS o correo electrónico es completamente seguro, y no podemos garantizar una inmunidad total ante interferencias indebidas externas ajenas a nuestro control razonable.
          </p>
        </>
      )
    },
    {
      id: "user-rights",
      shortTitle: "Derechos y Opciones",
      title: "11. Derechos y Opciones / User Rights & Choices",
      content: (
        <>
          <p>
            Tienes la facultad de gestionar, limitar u oponerte en gran medida al tratamiento técnico que le damos a tu información básica de identificación o contacto voluntario. Entre tus opciones encuentras:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-xs text-[#4E4D4D] font-light">
            <li><strong>Acceso y rectificación:</strong> Solicitar en cualquier momento conocer qué información resguardamos de tu persona, o pedir la corrección de campos que consideres inexactos o desactualizados.</li>
            <li><strong>Eliminación (Cancelación):</strong> Pedir la revocación total de tus datos asociados a las listas generales de contacto de nuestra clínica, conforme a las limitantes legales y requerimientos administrativos que rijan nuestra actividad.</li>
            <li><strong>Baja de Publicidad:</strong> Solicitar de manera inmediata que cesemos el envío de cualquier recordatorio informativo o folletines promocionales.</li>
          </ul>
          <p className="mt-4">
            Para manifestar libremente cualquiera de estos derechos, le invitamos a enviarnos una comunicación formal vía email a: <a href="mailto:info@dermamskinhealth.com" className="underline font-normal text-[#141313]">info@dermamskinhealth.com</a>.
          </p>
        </>
      )
    },
    {
      id: "minors",
      shortTitle: "Menores de Edad",
      title: "12. Menores de Edad / Children’s Privacy",
      content: (
        <>
          <p>
            El sitio no está dirigido a menores de 13 años. No recopilamos intencionalmente información personal de menores de 13 años. Si detectamos el ingreso fortuito o indebido de datos provistos por un niño menor a este rango legal sin el consentimiento tutelar o paterno debidamente acreditado, procederemos a la remoción inmediata y definitiva de tales archivos en nuestros registros de la red.
          </p>
          <p className="mt-4 text-[11px] text-[#666463] bg-[#EFEFEB] p-3 border border-[#363633]/15 font-mono">
            [LEGAL REVIEW REQUIRED: Confirmar el alcance de atención sobre procedimientos que involucren a pacientes menores de edad y si es necesario prever o desplegar secciones adicionales explicativas de consentimiento paterno o de tutores legales de pacientes jóvenes.]
          </p>
        </>
      )
    },
    {
      id: "external-links",
      shortTitle: "Enlaces Externos",
      title: "13. Enlaces Externos / Third-Party Links",
      content: (
        <>
          <p>
            El sitio puede contener enlaces a plataformas externas, como Google Maps, WhatsApp, redes sociales o herramientas de reserva. DERMA.M no controla las prácticas de privacidad de esos sitios externos. Es tu total y exclusiva responsabilidad leer de manera separada e independiente las políticas legales de dichas plataformas externas antes de ingresar datos personales en ellas.
          </p>
        </>
      )
    },
    {
      id: "changes",
      shortTitle: "Cambios a esta política",
      title: "14. Cambios a esta Política / Changes to This Policy",
      content: (
        <>
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente para amparar adecuadamente modificaciones técnicas o lineamientos de cumplimiento. La fecha de última actualización en la parte superior del documento indicará siempre la especificación de la versión legalmente vigente. Te aconsejamos comprobar este espacio de manera periódica.
          </p>
        </>
      )
    },
    {
      id: "contact-info",
      shortTitle: "Contacto",
      title: "15. Contacto / Contact Information",
      content: (
        <>
          <p>
            Para resolver cualquier duda o inquietud con respecto a la protección legal de su información personal, póngase en contacto directamente con nosotros a través de los datos provistos a continuación:
          </p>
          <div className="p-4 border border-[#363633]/15 bg-white text-xs mt-4">
            <h5 className="font-semibold text-[#141313] uppercase tracking-wider mb-2">DERMA.M, LLC</h5>
            <p className="mb-1"><strong>Sede Principal:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
            <p className="mb-1"><strong>Email General:</strong> info@dermamskinhealth.com</p>
            <p className="mb-1"><strong>Teléfono / WhatsApp de atención:</strong> +1 561 253 5384</p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] selection:bg-[#CCC9C1]">
      <Helmet>
        <title>Política de Privacidad | DERMA.M LLC Florida</title>
        <meta name="description" content="Política de privacidad de DERMA.M, LLC, una compañía de responsabilidad limitada del estado de Florida en West Palm Beach." />
        {siteUrl && <link rel="canonical" href={`${siteUrl}/politica-de-privacidad`} />}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <LegalPageLayout
          title="Política de Privacidad"
          subtitle="Directiva formal e información clara para el tratamiento, recolección voluntaria y resguardo de datos en nuestro sitio web."
          effectiveDate="10 de Octubre de 2021"
          lastUpdated="17 de Junio de 2026"
          attorneyReviewRequired={true}
          attorneyCalloutText="[REVISIÓN LEGAL OPERATIVA ACTIVA: Contenido simplificado adaptado a un sitio informativo sin pasarela de pagos activa ni almacenamiento de expedientes médicos digitales en línea.]"
          sections={sections}
        />
      </main>
      
      <Footer />
    </div>
  );
}
