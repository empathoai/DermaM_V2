import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CategoryPage from '../../components/templates/CategoryPage/CategoryPage';
import { categoryPages } from '../../data/categoryPages';

export default function FacialesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Tratamientos Faciales en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Tratamientos faciales diseñados para renovar, equilibrar y cuidar tu piel en Derma.M. West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/faciales" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tratamientos Faciales en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Tratamientos faciales diseñados para renovar, equilibrar y cuidar tu piel en Derma.M. West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/faciales" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tratamientos Faciales en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Tratamientos faciales diseñados para renovar, equilibrar y cuidar tu piel en Derma.M. West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Tratamientos Faciales | Derma.M",
          "url": "https://dermamskinhealth.com/faciales",
          "description": "Tratamientos faciales diseñados para renovar, equilibrar y cuidar tu piel en Derma.M.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Limpieza Facial Profunda", "url": "https://dermamskinhealth.com/limpieza-facial-profunda" },
            { "@type": "ListItem", "position": 2, "name": "PRP y Fibrina", "url": "https://dermamskinhealth.com/prf-y-fibrina" },
            { "@type": "ListItem", "position": 3, "name": "Hidrofacial", "url": "https://dermamskinhealth.com/faciales/hidrofacial" },
            { "@type": "ListItem", "position": 4, "name": "Microneedling / Dermapen", "url": "https://dermamskinhealth.com/faciales/microneedling" },
            { "@type": "ListItem", "position": 5, "name": "HIFU Facial", "url": "https://dermamskinhealth.com/faciales/hifu-facial" },
            { "@type": "ListItem", "position": 6, "name": "Peel Coreano", "url": "https://dermamskinhealth.com/faciales/peel-coreano" },
            { "@type": "ListItem", "position": 7, "name": "Radiofrecuencia Facial", "url": "https://dermamskinhealth.com/faciales/radiofrecuencia-facial" },
            { "@type": "ListItem", "position": 8, "name": "Oxigenoterapia Facial", "url": "https://dermamskinhealth.com/faciales/oxigenoterapia-facial" },
            { "@type": "ListItem", "position": 9, "name": "Rejuvenecimiento Facial", "url": "https://dermamskinhealth.com/faciales/rejuvenecimiento-facial" },
            { "@type": "ListItem", "position": 10, "name": "Tratamiento de Acné", "url": "https://dermamskinhealth.com/faciales/tratamiento-acne" },
            { "@type": "ListItem", "position": 11, "name": "Manchas y Cicatrices", "url": "https://dermamskinhealth.com/faciales/manchas-cicatrices" },
            { "@type": "ListItem", "position": 12, "name": "Dermabrasión Facial", "url": "https://dermamskinhealth.com/faciales/dermabracion-facial" },
            { "@type": "ListItem", "position": 13, "name": "Plasma Frío", "url": "https://dermamskinhealth.com/faciales/plasma-frio" },
            { "@type": "ListItem", "position": 14, "name": "Carboxiterapia Facial", "url": "https://dermamskinhealth.com/faciales/carboxiterapia-facial" }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <CategoryPage data={categoryPages.faciales} />
      </main>
      
      <Footer />
    </div>
  );
}
