import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar/Navbar';
import Footer from '../../../components/layout/Footer/Footer';
import TreatmentDetailPage from '../../../components/templates/TreatmentDetailPage/TreatmentDetailPage';
import { treatmentPages } from '../../../data/treatmentPages';

export default function CapilarTreatmentPage() {
  const { treatment } = useParams();
  const treatmentData = treatmentPages.capilar[treatment];

  if (!treatmentData) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
        <Helmet>
          <title>Tratamiento no encontrado | Derma.M</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        
        <Navbar />
        
        <main className="flex-grow flex flex-col items-center justify-center text-center padding-y-12 px-6" style={{ minHeight: '60vh', padding: '80px 24px' }}>
          <h1 className="font-sans text-3xl font-medium tracking-tight text-gray-900 mb-4" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Tratamiento no encontrado
          </h1>
          <p className="text-sm font-light text-gray-600 mb-8 max-w-md mx-auto" style={{ lineHeight: '1.6', fontSize: '15px' }}>
            El tratamiento solicitado no está disponible o se encuentra bajo revisión.
          </p>
          <Link 
            to="/capilar" 
            className="font-sans text-xs font-semibold uppercase tracking-wider" 
            style={{
              backgroundColor: '#141313',
              color: '#F2F0F1',
              padding: '14px 28px',
              border: '1px solid #141313',
              textDecoration: 'none',
              transition: 'all 0.25s ease'
            }}
          >
            Volver a tratamientos
          </Link>
        </main>
        
        <Footer />
      </div>
    );
  }

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermam.com';
  const canonicalUrl = `${siteUrl}${treatmentData.route}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <Helmet>
        <title>{treatmentData.title} | Derma.M</title>
        <meta name="description" content={treatmentData.description} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="canonical" href={`https://dermamskinhealth.com/capilar/${treatment}`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": treatmentData?.hero?.title || treatmentData?.title || "Tratamiento Estético",
          "description": treatmentData?.hero?.body || treatmentData?.description || "Tratamiento estético profesional en Derma.M.",
          "url": `https://dermamskinhealth.com${window?.location?.pathname || ''}`,
          "serviceType": "Aesthetic Treatment",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Derma.M",
            "url": "https://dermamskinhealth.com",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "5707 S Dixie Hwy UNIT D",
                "addressLocality": "West Palm Beach",
                "addressRegion": "FL",
                "postalCode": "33405",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "4960 SW 72nd Ave Ste 203",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33155",
                "addressCountry": "US"
              }
            ]
          }
        })}</script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <TreatmentDetailPage data={treatmentData} />
      </main>
      
      <Footer />
    </div>
  );
}
