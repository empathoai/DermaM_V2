import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';
import { renderLegalSections } from '../components/layout/LegalContent';
import { bookingPolicyData } from '../data/legalPages';

export default function BookingPolicy() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  const canonicalUrl = `${siteUrl}/booking-cancellation-refund-policy`;
  const sections = renderLegalSections(bookingPolicyData.sections);

  return (
    <div className="min-h-screen bg-[#F2F0F1] selection:bg-[#CCC9C1]">
      <Helmet>
        <title>{bookingPolicyData.meta.title}</title>
        <meta name="description" content={bookingPolicyData.meta.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={bookingPolicyData.meta.title} />
        <meta property="og:description" content={bookingPolicyData.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/assets/images/global/og-default.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={bookingPolicyData.meta.title} />
        <meta name="twitter:description" content={bookingPolicyData.meta.description} />
        <meta name="twitter:image" content={`${siteUrl}/assets/images/global/og-default.jpg`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <main>
        <LegalPageLayout
          title={bookingPolicyData.title}
          subtitle={bookingPolicyData.subtitle}
          effectiveDate={bookingPolicyData.effectiveDate}
          lastUpdated={bookingPolicyData.lastUpdated}
          sections={sections}
        />
      </main>
      <Footer />
    </div>
  );
}
