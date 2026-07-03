import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';
import { renderLegalSections } from '../components/layout/LegalContent';
import { termsOfUseData } from '../data/legalPages';

export default function TermsOfUse() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  const { pathname } = useLocation();
  const canonicalUrl = `${siteUrl}/terminos-de-uso`;
  const sections = renderLegalSections(termsOfUseData.sections);

  return (
    <>
      <Helmet>
        <title>{termsOfUseData.meta.title}</title>
        <meta name="description" content={termsOfUseData.meta.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={termsOfUseData.meta.title} />
        <meta property="og:description" content={termsOfUseData.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/assets/images/global/og-default.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={termsOfUseData.meta.title} />
        <meta name="twitter:description" content={termsOfUseData.meta.description} />
        <meta name="twitter:image" content={`${siteUrl}/assets/images/global/og-default.jpg`} />
        <meta name="robots" content={pathname === '/terms-of-use' ? 'noindex, nofollow' : 'index, follow'} />
      </Helmet>
      <Navbar />
      <main>
        <LegalPageLayout
          title={termsOfUseData.title}
          subtitle={termsOfUseData.subtitle}
          effectiveDate={termsOfUseData.effectiveDate}
          lastUpdated={termsOfUseData.lastUpdated}
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
