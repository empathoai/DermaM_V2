import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';
import { renderLegalSections } from '../components/layout/LegalContent';
import { privacyPolicyData } from '../data/legalPages';

export default function PrivacyPolicy() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  const { pathname } = useLocation();
  const canonicalUrl = `${siteUrl}/politica-de-privacidad`;
  const sections = renderLegalSections(privacyPolicyData.sections);

  return (
    <>
      <Helmet>
        <title>{privacyPolicyData.meta.title}</title>
        <meta name="description" content={privacyPolicyData.meta.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={privacyPolicyData.meta.title} />
        <meta property="og:description" content={privacyPolicyData.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/assets/images/global/og-default.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={privacyPolicyData.meta.title} />
        <meta name="twitter:description" content={privacyPolicyData.meta.description} />
        <meta name="twitter:image" content={`${siteUrl}/assets/images/global/og-default.jpg`} />
        <meta name="robots" content={pathname === '/privacy-policy' ? 'noindex, nofollow' : 'index, follow'} />
      </Helmet>
      <Navbar />
      <main>
        <LegalPageLayout
          title={privacyPolicyData.title}
          subtitle={privacyPolicyData.subtitle}
          effectiveDate={privacyPolicyData.effectiveDate}
          lastUpdated={privacyPolicyData.lastUpdated}
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
