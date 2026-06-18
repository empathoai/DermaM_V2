import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import AboutPage from '../components/templates/AboutPage/AboutPage';
import { aboutPage } from '../data/aboutPage';

export default function NosotrosPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || '';
  const canonicalUrl = siteUrl ? `${siteUrl}/nosotros` : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Nosotros | Derma.M</title>
        <meta name="description" content="Conoce la historia de DERMA.M, su fundadora Nancy Nieto y la filosofía de cuidado profesional, humano y personalizado detrás de cada tratamiento." />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="canonical" href="https://dermamskinhealth.com/nosotros" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nosotros | Derma.M" />
        <meta property="og:description" content="Conoce la historia de DERMA.M, su fundadora Nancy Nieto y la filosofía de cuidado profesional, humano y personalizado detrás de cada tratamiento." />
        <meta property="og:url" content="https://dermamskinhealth.com/nosotros" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nosotros | Derma.M" />
        <meta name="twitter:description" content="Conoce la historia de DERMA.M, su fundadora Nancy Nieto y la filosofía de cuidado profesional, humano y personalizado detrás de cada tratamiento." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Nosotros | Derma.M",
          "url": "https://dermamskinhealth.com/nosotros",
          "description": "Conoce la historia de DERMA.M, su fundadora Nancy Nieto y la filosofía de cuidado profesional, humano y personalizado detrás de cada tratamiento.",
          "mainEntity": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Derma.M",
            "legalName": "DERMA.M, LLC",
            "url": "https://dermamskinhealth.com",
            "telephone": "+15612535384",
            "email": "info@dermamskinhealth.com"
          }
        })}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow">
        <AboutPage data={aboutPage} />
      </main>
      
      <Footer />
    </div>
  );
}
