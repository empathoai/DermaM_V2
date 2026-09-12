export const META_PIXEL_ID = '3001886450080985';

export function trackMetaPageView() {
  if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
}

export function trackMetaContact() {
  if (typeof window.fbq === 'function') window.fbq('track', 'Contact');
}
