import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import LandingPage from '../../components/templates/LandingPage/LandingPage';
import { landingPages } from '../../data/landingPages';

export default function PostoperatoriosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Tratamientos Postoperatorios en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Acompañamiento profesional en tu recuperación postoperatoria. Drenaje linfático y cuidados especializados en Derma.M, West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/tratamientos-postoperatorios" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tratamientos Postoperatorios en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Acompañamiento profesional en tu recuperación postoperatoria. Drenaje linfático y cuidados especializados en Derma.M, West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/tratamientos-postoperatorios" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/landings/tratamientos-postoperatorios/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tratamientos Postoperatorios en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Acompañamiento profesional en tu recuperación postoperatoria. Drenaje linfático y cuidados especializados en Derma.M, West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/landings/tratamientos-postoperatorios/hero.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <LandingPage data={landingPages.postoperatorios} />
      </main>
      
      <Footer />
    </div>
  );
}
