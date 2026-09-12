import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackMetaPageView } from "../../utils/metaPixel";

export default function MetaPixelPageView() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackMetaPageView();
  }, [pathname]);

  return null;
}
