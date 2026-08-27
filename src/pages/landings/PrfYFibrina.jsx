import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import LandingPage from '../../components/templates/LandingPage/LandingPage';
import { landingPages } from '../../data/landingPages';

export default function PrfYFibrinaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Plasma Rico en Plaquetas y Fibrina | Derma.M</title>
        <meta name="description" content="Bioestimulación cutánea natural y progresiva para apoyar la calidad, textura y firmeza de la piel en Derma.M." />
        <link rel="canonical" href="https://dermamskinhealth.com/prf-y-fibrina" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plasma Rico en Plaquetas y Fibrina | Derma.M" />
        <meta property="og:description" content="Bioestimulación cutánea natural y progresiva para apoyar la calidad, textura y firmeza de la piel. Derma.M, West Palm Beach, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/prf-y-fibrina" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/landings/prf-y-fibrina/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plasma Rico en Plaquetas y Fibrina | Derma.M" />
        <meta name="twitter:description" content="Bioestimulación cutánea natural y progresiva para apoyar la calidad, textura y firmeza de la piel. Derma.M, West Palm Beach, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/landings/prf-y-fibrina/hero.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": landingPages.prfYFibrina?.hero?.title?.replace(/\n/g, ' ') || "Plasma Rico en Plaquetas y Fibrina",
              "description": landingPages.prfYFibrina?.hero?.body || "Bioestimulación cutánea con Plasma Rico en Plaquetas y Fibrina en Derma.M.",
              "url": "https://dermamskinhealth.com/prf-y-fibrina",
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
              "mainEntity": (landingPages.prfYFibrina?.faq?.items || []).map((item) => ({
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
        <LandingPage data={landingPages.prfYFibrina} />
      </main>
      
      <Footer />
    </div>
  );
}
