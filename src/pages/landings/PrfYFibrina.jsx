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
        <title>PRP y Fibrina en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Bioestimulación cutánea natural y progresiva para apoyar la calidad, textura y firmeza de la piel en Derma.M." />
        <link rel="canonical" href="https://dermamskinhealth.com/prf-y-fibrina" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PRP y Fibrina en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Bioestimulación cutánea natural y progresiva para apoyar la calidad, textura y firmeza de la piel. Derma.M, West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/prf-y-fibrina" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/landings/prf-y-fibrina/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PRP y Fibrina en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Bioestimulación cutánea natural y progresiva para apoyar la calidad, textura y firmeza de la piel. Derma.M, West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/landings/prf-y-fibrina/hero.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <LandingPage data={landingPages.prfYFibrina} />
      </main>
      
      <Footer />
    </div>
  );
}
