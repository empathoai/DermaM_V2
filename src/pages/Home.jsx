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
import { organizationNode } from "../data/organizationSchema";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141313] text-[#F2F0F1] font-sans selection:bg-[#CCC9C1] selection:text-[#141313] flex flex-col">
      <Helmet>
        <title>Derma.M | Medical Spa en West Palm Beach, FL</title>
        <meta name="description" content="Derma.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach, Florida. Evaluación personalizada. Agenda tu cita hoy." />
        <link rel="canonical" href="https://dermamskinhealth.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Derma.M | Medical Spa en West Palm Beach, FL" />
        <meta property="og:description" content="Derma.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach, Florida. Evaluación personalizada. Agenda tu cita hoy." />
        <meta property="og:url" content="https://dermamskinhealth.com/" />
        <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta property="og:locale" content="es_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derma.M | Medical Spa en West Palm Beach, FL" />
        <meta name="twitter:description" content="Derma.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach, Florida. Evaluación personalizada. Agenda tu cita hoy." />
        <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            organizationNode,
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
