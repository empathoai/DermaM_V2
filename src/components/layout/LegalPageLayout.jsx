import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function LegalPageLayout({
  title,
  subtitle,
  effectiveDate = "10 de Octubre de 2021",
  lastUpdated = "17 de Junio de 2026",
  attorneyReviewRequired = false,
  attorneyCalloutText = "",
  sections = [],
  children
}) {
  return (
    <div className="bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313] min-h-screen">
      {/* Editorial Header */}
      <header className="border-b border-[#363633]/10 py-16 sm:py-24 bg-[#EFEFEB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#BBB8B5] font-medium block mb-4">
              DERMA.M, LLC • DOCUMENTACIÓN DE CUMPLIMIENTO / COMPLIANCE DOCUMENTATION
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide font-normal text-[#141313] leading-none mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-[#363633]/80 font-light mb-8 font-sans">
                {subtitle}
              </p>
            )}
            
            {/* Meta Dates Block */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-[#363633]/10 text-xs uppercase tracking-wider text-[#BBB8B5]">
              <div>
                <span className="font-semibold text-[#363633]">Fecha de Entrada en Vigor / Effective Date:</span> {effectiveDate}
              </div>
              <div className="hidden sm:block text-[#363633]/20">|</div>
              <div>
                <span className="font-semibold text-[#363633]">Última Actualización / Last Updated:</span> {lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 py-12 sm:py-20">
        
        {/* Attorney Review Highlight (If designated) */}
        {attorneyReviewRequired && (
          <div className="mb-12 p-6 border border-[#363633] bg-[#EFEFEB] flex flex-col sm:flex-row gap-4 items-start">
            <div className="bg-[#141313] text-[#F2F0F1] p-2 mt-0.5">
              <ShieldAlert size={20} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#141313] block mb-1">
                [LEGAL REVIEW REQUIRED / REQUIERE REVISIÓN LEGAL]
              </span>
              <p className="text-sm font-light text-[#363633]/90 leading-relaxed italic">
                {attorneyCalloutText || "Este documento es un borrador estructurado con base en normativas y mejores prácticas de Florida. Requiere la revisión formal del asesor legal y el equipo de operaciones de DERMA.M, LLC antes de su publicación o firma."}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 sm:gap-16 items-start">
          
          {/* Table of Contents Sticky Sidebar (Desktop Only) */}
          {sections && sections.length > 0 && (
            <aside className="hidden lg:block lg:col-span-1 sticky top-32 border-l border-[#363633]/10 pl-6 py-2">
              <h2 className="text-xs uppercase tracking-widest text-[#141313] font-semibold mb-6">
                CONTENIDO / SECTIONS
              </h2>
              <ul className="flex flex-col gap-4 text-xs tracking-wider uppercase">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <a 
                      href={`#${sec.id}`}
                      className="text-[#BBB8B5] hover:text-[#141313] font-light transition-colors duration-200 block border-b border-transparent hover:border-[#141313]/20 pb-1"
                    >
                      {sec.shortTitle || sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Core Legal Content Section */}
          <section className={`col-span-1 ${sections && sections.length > 0 ? "lg:col-span-3" : "lg:col-span-4"}`}>
            <div className="space-y-12 max-w-4xl">
              {sections.map((sec, index) => (
                <div 
                  id={sec.id} 
                  key={sec.id} 
                  className={`pt-8 ${index !== 0 ? "border-t border-[#363633]/10" : ""}`}
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#BBB8B5] font-semibold mb-2">
                    SECCIÓN {index + 1}
                  </h3>
                  <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-wider font-normal text-[#141313] mb-6">
                    {sec.title}
                  </h2>
                  <div className="text-sm font-light leading-relaxed text-[#363633]/90 space-y-4">
                    {sec.content}
                  </div>
                </div>
              ))}
              
              {children && (
                <div className="pt-8">
                  {children}
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
