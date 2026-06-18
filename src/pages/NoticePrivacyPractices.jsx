import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function NoticePrivacyPractices() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  
  const sections = [
    {
      id: "draft-status",
      shortTitle: "Borrador de Borrador",
      title: "Estado del Documento (Borrador Interno) / Draft Status Notice",
      content: (
        <>
          <div className="p-6 border-2 border-dashed border-red-950/40 bg-red-950/[0.04] text-xs space-y-3 font-sans leading-relaxed">
            <span className="font-bold text-red-900 block text-sm uppercase tracking-wide">
              ❗ ADVERTENCIA INTERNA DE DISEÑO Y CUMPLIMIENTO / INTERNAL DESIGN WARNING
            </span>
            <p className="font-medium text-[#141313]">
              "ESTE DOCUMENTO ES EXCLUSIVAMENTE UN BORRADOR DE TRABAJO ESTRUCTURADO Y NO DEBE SER PUBLICADO NI COMERCIALIZADO COMO LA VERSIÓN FINAL HASTA QUE EL ASESOR LEGAL DE DERMA.M, LLC CONFIRME SI SE TRATA DE UNA ENTIDAD CUBIERTA POR HIPAA (HIPAA COVERED ENTITY) O SI ESTÁ LEGALMENTE OBLIGADA A PRESENTAR UN AVISO DE PRÁCTICAS DE PRIVACIDAD."
            </p>
            <p className="border-t border-[#363633]/15 pt-3 font-light text-[#363633]/80">
              "This page is a draft structure only and must not be published until DERMA.M’s legal counsel confirms whether a HIPAA Notice of Privacy Practices is required and approves the final content."
            </p>
          </div>
          <p className="mt-4">
            Este borrador sirve como maqueta y arquitectura estructural de información para que el equipo clínico y legal organice el futuro aviso oficial sobre el tratamiento especial de la Información de Salud Protegida (PHI, por sus siglas en inglés) en sus sistemas físicos o digitales.
          </p>
        </>
      )
    },
    {
      id: "applicability",
      shortTitle: "Aplicabilidad",
      title: "¿Cuándo se Aplicaría Este Aviso? / When This Notice Applies",
      content: (
        <>
          <p>
            Este Aviso regiría obligatoriamente en el caso en que se determine que DERMA.M, LLC califica como un "Proveedor de Atención Médica Cubierto" que realiza de forma electrónica transacciones estándar de salud. En tal escenario, se regularía la recolección, uso y transferencia del historial dermo-cosmético o datos clínicos que identifiquen directa o indirectamente su estado de salud psicofísica.
          </p>
        </>
      )
    },
    {
      id: "phi",
      shortTitle: "PHI",
      title: "Información de Salud Protegida / Protected Health Information (PHI)",
      content: (
        <>
          <p>
            Bajo las directrices federales, la Información de Salud Protegida (PHI) incluye datos demográficos, antecedentes médicos, informes diagnósticos de la dermis, fotografías clínicas de historial de tratamiento tomadas en el consultorio e información de facturación médica asociada a su perfil que sea transmitida o conservada físicamente por nuestro centro.
          </p>
        </>
      )
    },
    {
      id: "uses",
      shortTitle: "Usos y Revelación",
      title: "Usos y Divulgaciones de la PHI / Uses & Disclosures",
      content: (
        <>
          <p>
            En caso de activación regulatoria, la PHI sólo podría ser utilizada o revelada para los fines principales definidos por la ley HIPAA como <strong>TPO (Treatment, Payment, and Healthcare Operations)</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Tratamiento (Treatment):</strong> Coordinar sus servicios estéticos y clínicos entre los especialistas, esteticistas licenciadas y el director médico.</li>
            <li><strong>Pagos (Payment):</strong> Procesar cobros de depósitos, financiamientos estéticos externos o realizar comprobantes de caja corporativa.</li>
            <li><strong>Operaciones de Salud (Operations):</strong> Llevar a cabo controles internos de calidad clínica de técnicas aplicadas, capacitación de personal o auditorías de cumplimiento.</li>
          </ul>
          <p className="mt-4 text-[#363633]">
            Cualquier otro uso o transferencia de su PHI (con fines publicitarios directos, patrocinios externos o transferencia a terceros ajenos al centro) requeriría expresamente su <strong>Autorización Escrita Firmada</strong>.
          </p>
        </>
      )
    },
    {
      id: "patient-rights",
      shortTitle: "Derechos de Pacientes",
      title: "Derechos Legales de los Pacientes / Patient Rights",
      content: (
        <>
          <p>
            Si se aplica la normativa, el paciente dispondría de los siguientes derechos protegidos por estatutos federales:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Derecho a examinar, solicitar copias impresas o expedientes digitales de su PHI (salvedades técnicas permitidas).</li>
            <li>Derecho a solicitar la rectificación o corrección de datos de su historial dermato-estético si constata inexactitudes.</li>
            <li>Derecho a solicitar restricciones especiales confidenciales en el tratamiento y uso de PHI para comunicaciones habituales.</li>
            <li>Derecho a recibir un reporte contable sobre con quién ha compartido el centro su información de salud no exenta.</li>
          </ul>
        </>
      )
    },
    {
      id: "responsibilities",
      shortTitle: "Responsabilidades",
      title: "Responsabilidades de DERMA.M / Business Responsibilities",
      content: (
        <>
          <p>
            Bajo este aviso hipotético, DERMA.M se responsabilizaría administrativamente de:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Mantener el resguardo y privacidad estricta de cualquier PHI en sus servidores físicos y virtuales.</li>
            <li>Proporcionar este aviso en su portal web y tenerlo disponible físicamente en la clínica West Palm Beach.</li>
            <li>Cumplir estrictamente las políticas legales detalladas en la versión activa del aviso.</li>
          </ul>
        </>
      )
    },
    {
      id: "breaches",
      shortTitle: "Brechas de Seguridad",
      title: "Notificación de Brechas de Seguridad / Breach Notification",
      content: (
        <>
          <p>
            De suscitarse un acceso no autorizado o incidente cibernético que vulnere la privacidad de su Información de Salud Protegida desprovista de cifrado válido, asumimos el compromiso de notificarle formalmente a su dirección de contacto del incidente en los plazos exigidos en la reglamentación federal aplicable.
          </p>
        </>
      )
    },
    {
      id: "complaints",
      shortTitle: "Quejas y Contacto",
      title: "Oficina de Privacidad Médica y Canal de Quejas / Privacy Officer & Complaints",
      content: (
        <>
          <p>
            Si usted sospecha que sus derechos de privacidad correspondientes a sus datos de salud han sido vulnerados o desea interponer una queja, puede remitirla directamente a nuestro Delegado de Privacidad o bien elevarla formalmente ante la Oficina de Derechos Civiles (OCR) del Departamento de Salud y Servicios Humanos (HHS) de los EE. UU.
          </p>
          <div className="p-5 border border-[#363633]/15 bg-[#EFEFEB] text-xs mt-4">
            <p className="font-semibold uppercase tracking-wider text-[#141313] mb-2">DERMA.M, LLC — OFICINA DE PRIVACIDAD (PROPUESTA)</p>
            <p className="mb-1"><strong>Official de Privacidad:</strong> [INSERT PRIVACY OFFICER NAME / NANCY NIETO O DELEGADO REGISTRADO]</p>
            <p className="mb-1"><strong>Dirección:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
            <p className="mb-1"><strong>Correo Oficial:</strong> info@dermamskinhealth.com</p>
          </div>
          <p className="mt-4 font-normal text-xs text-stone-700 italic">
            No se tomará represalia comercial o médica alguna en contra del paciente por ejercer sus derechos de reclamación o presentar quejas formales de privacidad.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] selection:bg-[#CCC9C1]">
      <Helmet>
        <title>Aviso de Prácticas de Privacidad (Borrador) | DERMA.M LLC Florida</title>
        <meta name="description" content="Borrador técnico interno del Aviso de Prácticas de Privacidad de Salud para DERMA.M, LLC en West Palm Beach, Florida." />
        {siteUrl && <link rel="canonical" href={`${siteUrl}/notice-of-privacy-practices`} />}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <LegalPageLayout
          title="Aviso de Prácticas de Privacidad"
          subtitle="[BORRADOR DE RESPONSABILIDAD DE SALUD] Estructura informativa interna para la protección y tratamiento de la Información de Salud Protegida (PHI) de conformidad con directrices de salud de Florida."
          effectiveDate="Borrador en revisión"
          lastUpdated="17 de Junio de 2026"
          attorneyReviewRequired={true}
          attorneyCalloutText="[ATENCION - REQUIERE REVISIÓN LEGAL]: Este aviso de prácticas de privacidad de salud es de uso exclusivo de diseño de arquitectura interna y no debe publicarse al público hasta que el departamento jurídico de DERMA.M determine la obligación reguladora HIPAA del consultorio."
          sections={sections}
        />
      </main>
      
      <Footer />
    </div>
  );
}
