import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { legalUiCopy } from '../../data/legalPages';

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
            <span className="text-xs uppercase tracking-[0.2em] text-[#666463] font-medium block mb-4">
              {legalUiCopy.complianceLabel}
            </span>
            <h1 className="font-sans text-[clamp(2.25rem,10vw,3.75rem)] uppercase tracking-wide font-normal text-[#141313] leading-[0.98] mb-6 break-words">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-[#363633]/80 font-light mb-8 font-sans">
                {subtitle}
              </p>
            )}
            
            {/* Meta Dates Block */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-[#363633]/10 text-xs uppercase tracking-wider text-[#666463]">
              <div>
                <span className="font-semibold text-[#363633]">{legalUiCopy.effectiveDateLabel}</span> {effectiveDate}
              </div>
              <div className="hidden sm:block text-[#363633]/20">|</div>
              <div>
                <span className="font-semibold text-[#363633]">{legalUiCopy.lastUpdatedLabel}</span> {lastUpdated}
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
                {legalUiCopy.legalReviewLabel}
              </span>
              <p className="text-base font-light text-[#363633]/90 leading-relaxed italic">
                {attorneyCalloutText || legalUiCopy.defaultLegalReviewText}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 sm:gap-16 items-start">
          {sections && sections.length > 0 && (
            <details className="lg:hidden border-y border-[#363633]/15 py-4">
              <summary className="cursor-pointer text-xs uppercase tracking-widest text-[#141313] font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141313]">
                {legalUiCopy.contentsLabel}
              </summary>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs tracking-wider uppercase">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="block py-1 text-[#666463] underline decoration-[#363633]/20 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141313]"
                    >
                      {sec.shortTitle || sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}
          
          {/* Table of Contents Sticky Sidebar (Desktop Only) */}
          {sections && sections.length > 0 && (
            <aside className="hidden lg:block lg:col-span-1 sticky top-32 border-l border-[#363633]/10 pl-6 py-2">
              <h2 className="text-xs uppercase tracking-widest text-[#141313] font-semibold mb-6">
                {legalUiCopy.contentsLabel}
              </h2>
              <ul className="flex flex-col gap-4 text-xs tracking-wider uppercase">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <a 
                      href={`#${sec.id}`}
                      className="text-[#666463] hover:text-[#141313] font-light transition-colors duration-200 block border-b border-transparent hover:border-[#141313]/20 pb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141313]"
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
            <div className="space-y-12 max-w-[72ch]">
              {sections.map((sec, index) => (
                <div 
                  id={sec.id} 
                  key={sec.id} 
                  className={`scroll-mt-32 pt-8 ${index !== 0 ? "border-t border-[#363633]/10" : ""}`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#666463] font-semibold mb-2">
                    {legalUiCopy.sectionLabel} {index + 1}
                  </p>
                  <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-wider font-normal text-[#141313] mb-6">
                    {sec.title}
                  </h2>
                  <div className="text-base font-light leading-relaxed text-[#363633]/90 space-y-4">
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
