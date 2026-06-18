import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/sections/Hero/Hero";
import TrustBar from "../components/sections/TrustBar/TrustBar";
import FeaturedServices from "../components/sections/FeaturedServices/FeaturedServices";
import TreatmentCategories from "../components/sections/TreatmentCategories/TreatmentCategories";
import ClinicalPositioning from "../components/sections/ClinicalPositioning/ClinicalPositioning";
import MethodProcess from "../components/sections/MethodProcess/MethodProcess";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import FounderSection from "../components/sections/FounderSection/FounderSection";
import FinalCTA from "../components/sections/FinalCTA/FinalCTA";
import Footer from "../components/layout/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141313] text-[#F2F0F1] font-sans selection:bg-[#CCC9C1] selection:text-[#141313] flex flex-col">
      <Helmet>
        <title>Derma.M — Tratamientos Estéticos en West Palm Beach y Miami, FL</title>
        <meta name="description" content="Derma.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach y Miami, Florida. Evaluación personalizada. Agenda tu cita hoy." />
        <link rel="canonical" href="https://dermamskinhealth.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Derma.M — Tratamientos Estéticos en West Palm Beach y Miami, FL" />
        <meta property="og:description" content="Derma.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach y Miami, Florida. Evaluación personalizada. Agenda tu cita hoy." />
        <meta property="og:url" content="https://dermamskinhealth.com/" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta property="og:locale" content="es_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derma.M — Tratamientos Estéticos en West Palm Beach y Miami, FL" />
        <meta name="twitter:description" content="Derma.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach y Miami, Florida. Evaluación personalizada. Agenda tu cita hoy." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HealthAndBeautyBusiness",
              "@id": "https://dermamskinhealth.com/#organization",
              "name": "Derma.M",
              "legalName": "DERMA.M, LLC",
              "url": "https://dermamskinhealth.com",
              "logo": "https://dermamskinhealth.com/assets/images/global/logo.jpg",
              "image": "https://dermamskinhealth.com/assets/images/global/og-default.jpg",
              "description": "Derma.M es una clínica de medicina estética con tratamientos faciales, corporales, láser y bienestar en West Palm Beach y Miami, Florida.",
              "telephone": "+15612535384",
              "email": "info@dermamskinhealth.com",
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Credit Card",
              "medicalSpecialty": "Dermatology",
              "location": [
                {
                  "@type": "HealthAndBeautyBusiness",
                  "name": "Derma.M — West Palm Beach",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "5707 S Dixie Hwy UNIT D",
                    "addressLocality": "West Palm Beach",
                    "addressRegion": "FL",
                    "postalCode": "33405",
                    "addressCountry": "US"
                  },
                  "telephone": "+15612535384",
                  "url": "https://dermamskinhealth.com/contacto"
                },
                {
                  "@type": "HealthAndBeautyBusiness",
                  "name": "Derma.M — Miami",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "4960 SW 72nd Ave Ste 203",
                    "addressLocality": "Miami",
                    "addressRegion": "FL",
                    "postalCode": "33155",
                    "addressCountry": "US"
                  },
                  "telephone": "+15612535384",
                  "url": "https://dermamskinhealth.com/contacto"
                }
              ],
              "sameAs": [
                "https://dermamskinhealth.com"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://dermamskinhealth.com/#website",
              "url": "https://dermamskinhealth.com",
              "name": "Derma.M",
              "publisher": {
                "@id": "https://dermamskinhealth.com/#organization"
              }
            }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <Hero />
      
      <div className="relative z-10 flex flex-col">
        <TrustBar />
        <FounderSection />
        <FeaturedServices />
        <TreatmentCategories />
        <ClinicalPositioning />
        <MethodProcess />
        <Testimonials />
        <FinalCTA />
      </div>
      
      <Footer />
    </main>
  );
}
