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
        <title>Limpieza Facial Profunda en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Purificación profunda del rostro con protocolo profesional personalizado. Derma.M, West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/limpieza-facial-profunda" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limpieza Facial Profunda en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Purificación profunda del rostro con protocolo profesional personalizado. Derma.M, West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/limpieza-facial-profunda" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/landings/limpieza-facial-profunda/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Limpieza Facial Profunda en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Purificación profunda del rostro con protocolo profesional personalizado. Derma.M, West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/landings/limpieza-facial-profunda/hero.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <LandingPage data={landingPages.limpiezaFacial} />
      </main>
      
      <Footer />
    </div>
  );
}
