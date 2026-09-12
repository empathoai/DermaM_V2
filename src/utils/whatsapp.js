const DEFAULT_WHATSAPP_NUMBER = '15612535384'; // matches the wa.link/z7i9vm redirect target

export function buildWhatsAppUrl(message) {
  const number = (import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const GENERIC_WHATSAPP_MESSAGE =
  'Miré esto en su página web y estoy interesada en sus tratamientos, necesito más información.';

export function contextualWhatsAppMessage(topic) {
  return `Hola, vi su sitio web sobre ${topic} y me gustaría más información.`;
}
