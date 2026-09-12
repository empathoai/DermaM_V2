import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const Nosotros = lazy(() => import("./pages/Nosotros"));
const NancyNieto = lazy(() => import("./pages/NancyNieto"));
const Contacto = lazy(() => import("./pages/Contacto"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const TreatmentDisclaimer = lazy(() => import("./pages/TreatmentDisclaimer"));
const BookingPolicy = lazy(() => import("./pages/BookingPolicy"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const LegalResources = lazy(() => import("./pages/LegalResources"));

const Faciales = lazy(() => import("./pages/hubs/Faciales"));
const Corporales = lazy(() => import("./pages/hubs/Corporales"));
const LaserYLuz = lazy(() => import("./pages/hubs/LaserYLuz"));
const DentalEstetico = lazy(() => import("./pages/hubs/DentalEstetico"));
const IvTherapy = lazy(() => import("./pages/hubs/IvTherapy"));
const Capilar = lazy(() => import("./pages/hubs/Capilar"));

const FacialesTreatment = lazy(() => import("./pages/treatments/faciales/[treatment]"));
const CorporalesTreatment = lazy(() => import("./pages/treatments/corporales/[treatment]"));
const LaserTreatment = lazy(() => import("./pages/treatments/laser/[treatment]"));
const DentalTreatment = lazy(() => import("./pages/treatments/dental/[treatment]"));
const CapilarTreatment = lazy(() => import("./pages/treatments/capilar/[treatment]"));

const LimpiezaFacial = lazy(() => import("./pages/landings/LimpiezaFacial"));
const PrfYFibrina = lazy(() => import("./pages/landings/PrfYFibrina"));
const Postoperatorios = lazy(() => import("./pages/landings/Postoperatorios"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/nosotros/nancy-nieto" element={<NancyNieto />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terminos-de-uso" element={<TermsOfUse />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/treatment-disclaimer" element={<TreatmentDisclaimer />} />
      <Route path="/tratamientos-disclaimer" element={<TreatmentDisclaimer />} />
      <Route path="/booking-cancellation-refund-policy" element={<BookingPolicy />} />
      <Route path="/accessibility" element={<Accessibility />} />
      {/* Retired 2026-08-31 — see docs/superpowers/specs/2026-08-31-legal-pages-overhaul-design.md.
          Health-info privacy now lives in Política de Privacidad §6. .htaccess carries the 301 at deploy. */}
      <Route path="/notice-of-privacy-practices" element={<Navigate to="/politica-de-privacidad" replace />} />
      <Route path="/legal" element={<LegalResources />} />

      <Route path="/faciales" element={<Faciales />} />
      <Route path="/faciales/:treatment" element={<FacialesTreatment />} />

      <Route path="/corporales" element={<Corporales />} />
      <Route path="/corporales/:treatment" element={<CorporalesTreatment />} />

      <Route path="/laser-y-luz" element={<LaserYLuz />} />
      <Route path="/laser-y-luz/:treatment" element={<LaserTreatment />} />

      <Route path="/dental-estetico" element={<DentalEstetico />} />
      <Route path="/dental-estetico/:treatment" element={<DentalTreatment />} />

      <Route path="/iv-therapy" element={<IvTherapy />} />

      <Route path="/capilar" element={<Capilar />} />
      <Route path="/capilar/:treatment" element={<CapilarTreatment />} />

      <Route path="/limpieza-facial-profunda" element={<LimpiezaFacial />} />
      <Route path="/prf-y-fibrina" element={<PrfYFibrina />} />
      <Route path="/tratamientos-postoperatorios" element={<Postoperatorios />} />
    </Routes>
  );
}
