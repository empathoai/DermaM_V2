import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function LegalResources() {
  const legalDocs = [
    {
      title: "Política de Privacidad / Privacy Policy",
      description: "Infórmate sobre cómo recopilamos, utilizamos, protegemos y manejamos tu información personal de acuerdo con las normativas vigentes en Florida.",
      link: "/politica-de-privacidad"
    },
    {
      title: "Términos de Uso / Terms of Use",
      description: "Las reglas, lineamientos y acuerdos que rigen el uso del sitio web, envío de formularios y nuestra relación comercial general.",
      link: "/terminos-de-uso"
    },
    {
      title: "Deslinde de Tratamientos y Resultados / Treatment & Results Disclaimer",
      description: "Aviso legal de que toda la información es puramente informativa, no sustituye asesoramiento médico y los resultados varían para cada piel.",
      link: "/treatment-disclaimer"
    },
    {
      title: "Política de Reserva, Cancelación y Reembolso / Booking & Cancellation Policy",
      description: "Detalles completos sobre depósitos requeridos, políticas de ausencias (no-shows), cancelaciones de citas y reembolsos.",
      link: "/booking-cancellation-refund-policy"
    },
    {
      title: "Declaración de Accesibilidad / Accessibility Statement",
      description: "Nuestro compromiso con la inclusión, la usabilidad web y la facilitación del acceso digital para todas las personas.",
      link: "/accessibility"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Recursos Legales • DERMA.M</title>
        <meta name="description" content="Centro de documentación de cumplimiento legal de DERMA.M. Accede a nuestras políticas de privacidad, términos de uso, y deslindes clínicos." />
      </Helmet>

      <Navbar />

      <LegalPageLayout
        title="Recursos Legales / Legal Resources"
        subtitle="Centro unificado de documentación, cumplimiento normativo y políticas operativas de DERMA.M."
        effectiveDate="10 de Octubre de 2021"
        lastUpdated="17 de Junio de 2026"
        attorneyReviewRequired={false}
      >
        <div className="space-y-8 max-w-3xl">
          <p className="text-base text-[#4E4D4D] leading-relaxed">
            Bienvenido al portal de cumplimiento de <strong className="text-[#141313]">DERMA.M</strong>. Para garantizar la máxima transparencia con nuestros pacientes, visitantes y la comunidad, ponemos a su disposición todos los documentos rectores de nuestra operación y presencia digital. Seleccione uno de los recursos a continuación para ver de forma detallada cada política:
          </p>

          <p className="italic text-xs text-[#666463] pb-4">
            Welcome to the compliance hub of <strong>DERMA.M</strong>. To ensure maximum transparency, we provide you with all governing documents. Please select any document below to view detailed provisions:
          </p>

          <div className="grid grid-cols-1 gap-6">
            {legalDocs.map((doc, index) => (
              <div 
                key={index} 
                className="p-6 border border-[#363633]/15 bg-white hover:border-[#141313] transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start justify-between group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText size={18} className="text-[#363633]/60 group-hover:text-[#141313] transition-colors duration-200" />
                    <h3 className="text-md font-semibold text-[#141313] uppercase tracking-wider">
                      {doc.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#4E4D4D] leading-relaxed font-light">
                    {doc.description}
                  </p>
                </div>
                <div className="pt-2 sm:pt-0">
                  <Link 
                    to={doc.link} 
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#363633] group-hover:text-[#141313] border-b border-[#363633]/30 pb-0.5 group-hover:border-[#141313] transition-all duration-200"
                  >
                    Ver documento <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-[#363633]/15 bg-[#EFEFEB] text-[11px] leading-relaxed text-[#666463] space-y-2">
            <p>
              <strong>Aviso Clínico General / General Medical Disclaimer:</strong> La información contenida en todos los documentos legales, páginas asistenciales o páginas de redes sociales de DERMA.M, LLC tiene propósitos informativos generales únicamente. Por favor, lea detenidamente los deslindes clínicos de cada procedimiento antes de someterse a cualquier tratamiento estético.
            </p>
            <p className="border-t border-[#363633]/10 pt-2 italic">
              <strong>Clinical Disclosure:</strong> The legal documents, treatment outlines, or social media statements provided by DERMA.M, LLC are for general informational purposes only. Please carefully read clinical disclosures for each procedure before undergoing any aesthetic treatments.
            </p>
          </div>
        </div>
      </LegalPageLayout>

      <Footer />
    </>
  );
}
