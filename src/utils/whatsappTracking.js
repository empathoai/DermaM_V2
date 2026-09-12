import { trackMetaContact } from './metaPixel';
import { trackGA4Contact } from './ga4';

export function trackWhatsAppClick() {
  trackMetaContact();
  trackGA4Contact();
}
