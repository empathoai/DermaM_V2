import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CategoryPage from '../../components/templates/CategoryPage/CategoryPage';
import { categoryPages } from '../../data/categoryPages';

export default function CapilarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Tratamientos Capilares en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Tratamientos para acompañar la salud y apariencia del cabello en Derma.M. West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/capilar" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tratamientos Capilares en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Tratamientos para acompañar la salud y apariencia del cabello en Derma.M. West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/capilar" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tratamientos Capilares en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Tratamientos para acompañar la salud y apariencia del cabello en Derma.M. West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Tratamientos Capilares | Derma.M",
          "url": "https://dermamskinhealth.com/capilar",
          "description": "Tratamientos para acompañar la salud y apariencia del cabello en Derma.M.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Tratamiento Capilar", "url": "https://dermamskinhealth.com/capilar/tratamiento-capilar" }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <CategoryPage data={categoryPages.capilar} />
      </main>
      
      <Footer />
    </div>
  );
}
