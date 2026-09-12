import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import MetaPixelPageView from "./components/utils/MetaPixelPageView.jsx";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp/FloatingWhatsApp.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MetaPixelPageView />
      <AppRoutes />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
