import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import FounderBioPage from '../components/templates/FounderBioPage/FounderBioPage';
import { founderBioPage } from '../data/aboutPage';

export default function NancyNietoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Nancy Nieto, fundadora y directora | DERMA.M Florida</title>
        <meta name="description" content="Conoce a Nancy Nieto, fundadora y directora de DERMA.M: su formación, filosofía de cuidado y la visión detrás del medical spa en West Palm Beach." />
        <link rel="canonical" href="https://dermamskinhealth.com/nosotros/nancy-nieto" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Nancy Nieto, fundadora y directora | DERMA.M Florida" />
        <meta property="og:description" content="Conoce a Nancy Nieto, fundadora y directora de DERMA.M: su formación, filosofía de cuidado y la visión detrás del medical spa en West Palm Beach." />
        <meta property="og:url" content="https://dermamskinhealth.com/nosotros/nancy-nieto" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nancy Nieto, fundadora y directora | DERMA.M Florida" />
        <meta name="twitter:description" content="Conoce a Nancy Nieto, fundadora y directora de DERMA.M: su formación, filosofía de cuidado y la visión detrás del medical spa en West Palm Beach." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nancy Nieto",
          "jobTitle": "Fundadora y Directora",
          "description": "Flebotomista certificada en Estados Unidos y especialista facial con licencia en Florida. Fundadora y directora de DERMA.M.",
          "url": "https://dermamskinhealth.com/nosotros/nancy-nieto",
          "image": "https://dermamskinhealth.com/assets/images/about/nancy-nieto-fundadora.jpg",
          "worksFor": { "@id": "https://dermamskinhealth.com/#organization" },
          "sameAs": ["https://www.linkedin.com/in/nancy-nieto-581160144"]
        })}</script>
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        <FounderBioPage data={founderBioPage} />
      </main>

      <Footer />
    </div>
  );
}
