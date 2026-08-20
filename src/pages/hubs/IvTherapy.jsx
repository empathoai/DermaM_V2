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
        <title>IV Therapy en West Palm Beach | Derma.M</title>
        <meta name="description" content="Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M. West Palm Beach, Florida." />
        <link rel="canonical" href="https://dermamskinhealth.com/iv-therapy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IV Therapy en West Palm Beach | Derma.M" />
        <meta property="og:description" content="Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M. West Palm Beach, Florida." />
        <meta property="og:url" content="https://dermamskinhealth.com/iv-therapy" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IV Therapy en West Palm Beach | Derma.M" />
        <meta name="twitter:description" content="Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M. West Palm Beach, Florida." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "IV Therapy | Derma.M",
          "url": "https://dermamskinhealth.com/iv-therapy",
          "description": "Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en Derma.M.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Tri-Immune Boost IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 2, "name": "Get-Up-and-Go IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 3, "name": "Immunity IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 4, "name": "Brainstorm IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 5, "name": "Alleviate IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 6, "name": "Quench IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 7, "name": "Reboot IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 8, "name": "Recovery & Performance IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 9, "name": "Snow Bright IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 10, "name": "Timeless IV", "url": "https://dermamskinhealth.com/iv-therapy" },
            { "@type": "ListItem", "position": 11, "name": "El B-Lean IV", "url": "https://dermamskinhealth.com/iv-therapy" }
          ]
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
