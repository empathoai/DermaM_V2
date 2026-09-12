import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import MetaPixelPageView from "./components/utils/MetaPixelPageView.jsx";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp/FloatingWhatsApp.jsx";
import RouteLoader from "./components/shared/RouteLoader/RouteLoader.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MetaPixelPageView />
      <Suspense fallback={<RouteLoader />}>
        <AppRoutes />
      </Suspense>
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
