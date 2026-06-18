import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function TreatmentDisclaimer() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  
  const sections = [
    {
      id: "general",
      shortTitle: "General",
      title: "Descargo de Responsabilidad de Tratamientos Generales / General Treatment Disclaimer",
      content: (
        <>
          <p>
            Tanto el contenido editado en el sitio web oficial de <strong>DERMA.M, LLC</strong>, como las publicaciones, folletos o vídeos descriptivos promocionales compartidos a través de redes estéticas digitales, poseen fines educativos e informativos exclusivamente. No pretenden reemplazar, emular ni evadir la consulta médica formal, diagnóstico personalizado ni prescripción facultativa proporcionada por su terapeuta de cabecera o especialista en salud certificado.
          </p>
          <p className="italic text-xs text-[#363633]/70 mt-4">
            The content provided on this website, social media, and other digital platforms is for general educational and informational purposes only. It does not replace or constitute a professional medical evaluation, diagnosis, or prescription from a licensed healthcare provider.
          </p>
        </>
      )
    },
    {
      id: "clinical-note",
      shortTitle: "Nota Clínica",
      title: "Variación Individual de Resultados / Individual Results Disclaimer",
      content: (
        <>
          <div className="p-5 border border-[#363633]/30 bg-[#EFEFEB] font-sans my-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#141313] block mb-2">
              NOTA CLÍNICA ESPECÍFICA / CLINICAL FOOTNOTE:
            </span>
            <p className="text-sm font-medium italic text-[#141313] leading-relaxed mb-4">
              "Nota clínica: Los resultados pueden variar según las características individuales de la piel, el protocolo recomendado y el cumplimiento de las indicaciones pre y post-tratamiento. Ningún contenido de este sitio garantiza resultados específicos."
            </p>
            <p className="text-xs italic text-[#363633]/70 leading-relaxed">
              "Clinical note: Results may vary depending on individual skin characteristics, the recommended protocol, and compliance with pre- and post-treatment instructions. No content on this website guarantees specific outcomes."
            </p>
          </div>
          <p className="mt-4">
            La obtención de un tono o textura deseado, reducción de imperfecciones o remodelación corporal se ve directamente incidida por factores biológicos inmanentes como la edad del cliente, tipo de herencia genética, hábitos alimenticios, tabaco, exposición severa al sol, niveles de estrés y respuesta inmune particular.
          </p>
        </>
      )
    },
    {
      id: "no-guarantees",
      shortTitle: "Sin Garantías",
      title: "Ausencia de Resultados Garantizados / No Guaranteed Outcomes",
      content: (
        <>
          <p>
            El campo de la medicina estética y el tratamiento dermo-cosmético no es una ciencia exacta en la cual se puedan prometer u ofrecer garantías absolutas de éxito o transformación. Ningún profesional o empleado clínico de <strong>DERMA.M, LLC</strong> puede, de forma verbal o escrita, garantizar que usted obtendrá un cambio estético permanente ni una eliminación absoluta de manchas, arrugas o flacidez. Se le guiará respecto de expectativas reales basadas en experiencia estadística previa.
          </p>
        </>
      )
    },
    {
      id: "consultation",
      shortTitle: "Consulta Obligatoria",
      title: "Consulta Avanzada Obligatoria / Mandatory Consultation",
      content: (
        <>
          <p>
            Previa realización de cualquier protocolo avanzado (como PRP, peelings químicos fuertes, aparatología láser, microagujoneamiento, terapia intravenosa, etc.), es estrictamente indispensable completar una consulta personal de evaluación de tez. En este proceso de cribado clínico se analizará su historia, hábitos y posibles contraindicaciones que invaliden o pospongan el tratamiento por motivos éticos y de seguridad física.
          </p>
        </>
      )
    },
    {
      id: "contraindications",
      shortTitle: "Contraindicaciones",
      title: "Idoneidad, Contraindicaciones y Seguridad / Treatment Suitability & Contraindications",
      content: (
        <>
          <p>
            Ciertos tratamientos no se recomiendan a pacientes bajo las siguientes condiciones especiales:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Embarazo, sospecha del mismo o lactancia materna activa.</li>
            <li>Infecciones bacterianas, fúngicas o brotes de herpes activo en el área facial o corporal a tratar.</li>
            <li>Historial personal de cicatrización queloide o trastornos hemorrágicos no controlados.</li>
            <li>Uso reciente de medicamentos fotosensibilizantes o retinoides orales fuertes en los últimos 6 meses.</li>
            <li>Enfermedades autoinmunes complejas dependientes de corticoterapia.</li>
          </ul>
          <p className="mt-4 font-normal text-xs text-red-950 uppercase">
            Es obligación indelegable del paciente declarar con total honestidad y veracidad cualquier afección previa, medicación crónica actual, uso de rellenos inyectables anteriores, alergia específica o embarazo.
          </p>
        </>
      )
    },
    {
      id: "photos",
      shortTitle: "Antes y Después",
      title: "Aviso de Fotografías 'Antes y Después' / Before & After Photos Disclosure",
      content: (
        <>
          <blockquote className="border-l-4 border-[#363633]/20 pl-4 py-2 italic my-4 text-xs space-y-2 text-[#363633]/80 font-sans bg-[#EFEFEB] p-4">
            <p><strong>BILINGUAL CLAUSE / CLÁUSULA BILINGÜE:</strong></p>
            <p className="font-medium text-[#141313]">"Las fotografías de antes y después y los testimonios pueden reflejar experiencias individuales reales, pero son solo ejemplos. Los resultados varían y no están garantizados."</p>
            <p className="font-light text-[#363633]/80">"Before-and-after photographs and testimonials may reflect real individual experiences, but they are examples only. Results vary and are not guaranteed."</p>
          </blockquote>
          <p className="mt-4">
            Las fotografías representan casos específicos clínicamente evaluados con protocolos a medida. Las condiciones de iluminación, ángulos de captura y variaciones de cámara se cuidan al máximo para reflejar realismo, pero de ningún modo constituyen una promesa implícita de que su rostro o estructura corporal responderá idénticamente al tratamiento.
          </p>
        </>
      )
    },
    {
      id: "sessions",
      shortTitle: "Sesiones",
      title: "Mantenimiento, Multisesiones y Cuidados Posteriores / Aftercare & Multissesion Needs",
      content: (
        <>
          <p>
            La vasta mayoría de tratamientos de optimización de la calidad cutánea o rejuvenecimiento estético exigen protocolos de mantenimiento periódicos, sesiones seriadas y una rigurosa rutina de cuidados en casa (que incluye de modo irrenunciable el uso de protección solar de amplio espectro diario, hidratación y evitar la exposición ultravioleta). No adherirse a estos cuidados puede provocar el desvanecimiento prematuro de los avances estéticos o reacciones pigmentarias adversas.
          </p>
        </>
      )
    },
    {
      id: "emergency",
      shortTitle: "Emergencias",
      title: "Aviso de Exclusión de Emergencias Médicas / Medical Emergency Disclaimer",
      content: (
        <>
          <div className="p-4 border border-red-950/20 bg-red-950/[0.03] text-xs space-y-2">
            <span className="font-semibold text-red-900 block uppercase">EMERGENCIA MÉDICA / MEDICAL EMERGENCY DISPATCH</span>
            <p>
              Nuestra plataforma digital, formularios generales y chat en línea no son monitoreados de forma constante ni están capacitados clínicamente para atender emergencias médicas de salud o traumas cutáneos graves de riesgo vital.
            </p>
            <p className="italic">
              Si usted está experimentando una reacción alérgica repentina grave (por ejemplo, anafilaxia, dificultad para respirar, quemadura grave o dolor agudo imprevisto), por favor llame de inmediato al número de emergencia general de los Estados Unidos (<strong>911</strong>) o acuda a la sala de urgencias hospitalarias más cercana a su residencia.
            </p>
          </div>
        </>
      )
    },
    {
      id: "contact",
      shortTitle: "Contacto",
      title: "Información para Consultas Clínicas / Contact Details",
      content: (
        <>
          <p>
            Si desea esclarecer dudas adicionales respecto de las condiciones de idoneidad o contraindicaciones de nuestros tratamientos médicos estéticos, escríbanos de inmediato:
          </p>
          <div className="p-5 border border-[#363633]/10 bg-[#EFEFEB] text-xs mt-4">
            <p className="font-semibold uppercase text-[#141313] mb-2">DERMA.M, LLC</p>
            <p className="mb-1"><strong>Atención Clínica:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
            <p className="mb-1"><strong>Teléfono / Coordinación:</strong> +1 561 253 5384</p>
            <p className="mb-1"><strong>Correo de Contacto:</strong> info@dermamskinhealth.com</p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] selection:bg-[#CCC9C1]">
      <Helmet>
        <title>Descargo de Tratamientos | DERMA.M LLC Florida</title>
        <meta name="description" content="Advertencia sobre tratamientos y resultados de cuidado estético corporal y facial del centro dermatológico DERMA.M, LLC en Florida." />
        {siteUrl && <link rel="canonical" href={`${siteUrl}/treatment-disclaimer`} />}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <LegalPageLayout
          title="Descargo de Tratamientos y Resultados"
          subtitle="Advertencias legales y especificaciones clínicas obligatorias respecto de las expectativas de resultados estéticos de nuestros tratamientos faciales y corporales."
          effectiveDate="10 de Octubre de 2021"
          lastUpdated="17 de Junio de 2026"
          attorneyReviewRequired={true}
          attorneyCalloutText="[REVISIÓN LEGAL REQUERIDA: Un especialista en derecho de salud en Florida debe ratificar que los descargos clínicos para PRP y aparatología láser se acoplan a las leyes estatales que regulan los consultorios médicos estéticos y no vulneran la junta de medicina.]"
          sections={sections}
        />
      </main>
      
      <Footer />
    </div>
  );
}
