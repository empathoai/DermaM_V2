import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import AboutPage from '../components/templates/AboutPage/AboutPage';
import { aboutPage } from '../data/aboutPage';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Equipo y filosofía de cuidado | DERMA.M Florida</title>
        <meta name="description" content="Conoce a Nancy Nieto, al equipo de DERMA.M y el enfoque de valoración, formación continua y atención personalizada en West Palm Beach." />
        <link rel="canonical" href="https://dermamskinhealth.com/nosotros" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Equipo y filosofía de cuidado | DERMA.M Florida" />
        <meta property="og:description" content="Conoce a Nancy Nieto, al equipo de DERMA.M y el enfoque de valoración, formación continua y atención personalizada en West Palm Beach." />
        <meta property="og:url" content="https://dermamskinhealth.com/nosotros" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Equipo y filosofía de cuidado | DERMA.M Florida" />
        <meta name="twitter:description" content="Conoce a Nancy Nieto, al equipo de DERMA.M y el enfoque de valoración, formación continua y atención personalizada en West Palm Beach." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Equipo y filosofía de cuidado | DERMA.M Florida",
          "url": "https://dermamskinhealth.com/nosotros",
          "description": "Conoce a Nancy Nieto, al equipo de DERMA.M y el enfoque de valoración, formación continua y atención personalizada en West Palm Beach.",
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
