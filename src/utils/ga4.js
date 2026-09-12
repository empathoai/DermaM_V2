export function trackGA4Contact() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'contact_whatsapp', { method: 'whatsapp' });
  }
}
