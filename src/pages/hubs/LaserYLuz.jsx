import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CategoryPage from '../../components/templates/CategoryPage/CategoryPage';
import { categoryPages } from '../../data/categoryPages';

export default function LaserYLuzPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Tratamientos Láser y Luz en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Tratamientos con tecnología estética para renovar y mejorar la piel en Derma.M. West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/laser-y-luz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tratamientos Láser y Luz en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Tratamientos con tecnología estética para renovar y mejorar la piel en Derma.M. West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/laser-y-luz" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tratamientos Láser y Luz en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Tratamientos con tecnología estética para renovar y mejorar la piel en Derma.M. West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Tratamientos Láser y Luz | Derma.M",
          "url": "https://dermamskinhealth.com/laser-y-luz",
          "description": "Tratamientos con tecnología estética para renovar y mejorar la piel en Derma.M.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Depilación Láser", "url": "https://dermamskinhealth.com/laser-y-luz/depilacion-laser" },
            { "@type": "ListItem", "position": 2, "name": "IPL", "url": "https://dermamskinhealth.com/laser-y-luz/ipl" },
            { "@type": "ListItem", "position": 3, "name": "CO2 Láser", "url": "https://dermamskinhealth.com/laser-y-luz/co2-laser" }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <CategoryPage data={categoryPages.laserYLuz} />
      </main>
      
      <Footer />
    </div>
  );
}
