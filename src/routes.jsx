import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import TreatmentDisclaimer from "./pages/TreatmentDisclaimer";
import BookingPolicy from "./pages/BookingPolicy";
import Accessibility from "./pages/Accessibility";
import NoticePrivacyPractices from "./pages/NoticePrivacyPractices";
import LegalResources from "./pages/LegalResources";

import Faciales from "./pages/hubs/Faciales";
import Corporales from "./pages/hubs/Corporales";
import LaserYLuz from "./pages/hubs/LaserYLuz";
import DentalEstetico from "./pages/hubs/DentalEstetico";
import IvTherapy from "./pages/hubs/IvTherapy";
import Capilar from "./pages/hubs/Capilar";

import FacialesTreatment from "./pages/treatments/faciales/[treatment]";
import CorporalesTreatment from "./pages/treatments/corporales/[treatment]";
import LaserTreatment from "./pages/treatments/laser/[treatment]";
import DentalTreatment from "./pages/treatments/dental/[treatment]";
import CapilarTreatment from "./pages/treatments/capilar/[treatment]";

import LimpiezaFacial from "./pages/landings/LimpiezaFacial";
import PrfYFibrina from "./pages/landings/PrfYFibrina";
import Postoperatorios from "./pages/landings/Postoperatorios";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terminos-de-uso" element={<TermsOfUse />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/treatment-disclaimer" element={<TreatmentDisclaimer />} />
      <Route path="/tratamientos-disclaimer" element={<TreatmentDisclaimer />} />
      <Route path="/booking-cancellation-refund-policy" element={<BookingPolicy />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/notice-of-privacy-practices" element={<NoticePrivacyPractices />} />
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
