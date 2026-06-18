import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CategoryPage from '../../components/templates/CategoryPage/CategoryPage';
import { categoryPages } from '../../data/categoryPages';

export default function DentalEsteticoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Dental Estético en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Tratamientos para cuidar la apariencia visible de tu sonrisa en Derma.M. West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/dental-estetico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dental Estético en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Tratamientos para cuidar la apariencia visible de tu sonrisa en Derma.M. West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/dental-estetico" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dental Estético en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Tratamientos para cuidar la apariencia visible de tu sonrisa en Derma.M. West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Dental Estético | Derma.M",
          "url": "https://dermamskinhealth.com/dental-estetico",
          "description": "Tratamientos para cuidar la apariencia visible de tu sonrisa en Derma.M.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Blanqueamiento Dental", "url": "https://dermamskinhealth.com/dental-estetico/blanqueamiento-dental" },
            { "@type": "ListItem", "position": 2, "name": "Limpieza Dental", "url": "https://dermamskinhealth.com/dental-estetico/limpieza-dental" }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <CategoryPage data={categoryPages.dentalEstetico} />
      </main>
      
      <Footer />
    </div>
  );
}
