import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CategoryPage from '../../components/templates/CategoryPage/CategoryPage';
import { categoryPages } from '../../data/categoryPages';

export default function CorporalesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>Tratamientos Corporales en West Palm Beach y Miami | Derma.M</title>
        <meta name="description" content="Tratamientos corporales enfocados en bienestar, recuperación y objetivos estéticos personalizados en Derma.M. West Palm Beach y Miami, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/corporales" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tratamientos Corporales en West Palm Beach y Miami | Derma.M" />
        <meta property="og:description" content="Tratamientos corporales enfocados en bienestar, recuperación y objetivos estéticos personalizados en Derma.M. West Palm Beach y Miami, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/corporales" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tratamientos Corporales en West Palm Beach y Miami | Derma.M" />
        <meta name="twitter:description" content="Tratamientos corporales enfocados en bienestar, recuperación y objetivos estéticos personalizados en Derma.M. West Palm Beach y Miami, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Tratamientos Corporales | Derma.M",
          "url": "https://dermamskinhealth.com/corporales",
          "description": "Tratamientos corporales enfocados en bienestar, recuperación y objetivos estéticos personalizados en Derma.M.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Lipo 360 sin Cirugía", "url": "https://dermamskinhealth.com/corporales/lipo-360" },
            { "@type": "ListItem", "position": 2, "name": "Levantamiento de Glúteos", "url": "https://dermamskinhealth.com/corporales/levantamiento-gluteos" },
            { "@type": "ListItem", "position": 3, "name": "Marcación Abdominal", "url": "https://dermamskinhealth.com/corporales/marcacion-abdominal" },
            { "@type": "ListItem", "position": 4, "name": "HIFU Corporal", "url": "https://dermamskinhealth.com/corporales/hifu-corporal" },
            { "@type": "ListItem", "position": 5, "name": "Maderoterapia Corporal", "url": "https://dermamskinhealth.com/corporales/maderoterapia-corporal" },
            { "@type": "ListItem", "position": 6, "name": "Corrientes Rusas", "url": "https://dermamskinhealth.com/corporales/corrientes-rusas" },
            { "@type": "ListItem", "position": 7, "name": "Estrías y Celulitis", "url": "https://dermamskinhealth.com/corporales/estrias-celulitis" },
            { "@type": "ListItem", "position": 8, "name": "Carboxiterapia Corporal", "url": "https://dermamskinhealth.com/corporales/carboxiterapia-corporal" }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <CategoryPage data={categoryPages.corporales} />
      </main>
      
      <Footer />
    </div>
  );
}
