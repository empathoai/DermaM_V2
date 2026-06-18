import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CategoryPage from '../../components/templates/CategoryPage/CategoryPage';
import { categoryPages } from '../../data/categoryPages';

export default function IvTherapyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>IV Therapy en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M. West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/iv-therapy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IV Therapy en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M. West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/iv-therapy" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IV Therapy en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M. West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "IV Therapy | Derma.M",
          "url": "https://dermamskinhealth.com/iv-therapy",
          "description": "Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M."
        })}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <CategoryPage data={categoryPages.ivTherapy} />
      </main>
      
      <Footer />
    </div>
  );
}
