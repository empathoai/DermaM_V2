import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import LandingPage from '../../components/templates/LandingPage/LandingPage';
import { landingPages } from '../../data/landingPages';

export default function LimpiezaFacialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Limpieza Facial Profunda en West Palm Beach | Derma.M</title>
        <meta name="description" content="Purificación profunda del rostro con protocolo profesional personalizado. Derma.M, West Palm Beach, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/limpieza-facial-profunda" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limpieza Facial Profunda en West Palm Beach | Derma.M" />
        <meta property="og:description" content="Purificación profunda del rostro con protocolo profesional personalizado. Derma.M, West Palm Beach, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/limpieza-facial-profunda" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/landings/limpieza-facial-profunda/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Limpieza Facial Profunda en West Palm Beach | Derma.M" />
        <meta name="twitter:description" content="Purificación profunda del rostro con protocolo profesional personalizado. Derma.M, West Palm Beach, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/landings/limpieza-facial-profunda/hero.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": landingPages.limpiezaFacial?.hero?.title || "Limpieza Facial Profunda",
              "description": landingPages.limpiezaFacial?.hero?.body || "Limpieza facial profunda en Derma.M.",
              "url": "https://dermamskinhealth.com/limpieza-facial-profunda",
              "serviceType": "Aesthetic Treatment",
              "provider": {
                "@type": "HealthAndBeautyBusiness",
                "name": "Derma.M",
                "url": "https://dermamskinhealth.com",
                "address": [
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "5707 S Dixie Hwy UNIT D",
                    "addressLocality": "West Palm Beach",
                    "addressRegion": "FL",
                    "postalCode": "33405",
                    "addressCountry": "US"
                  }
                ]
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": (landingPages.limpiezaFacial?.faq?.items || []).map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            }
          ]
        })}</script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <LandingPage data={landingPages.limpiezaFacial} />
      </main>
      
      <Footer />
    </div>
  );
}
