import { categoryPages } from './categoryPages';
import { treatmentPages } from './treatmentPages';

const normalizePathname = (pathname = '/') => {
  const normalized = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return normalized || '/';
};

const normalizeSubject = (value = '') => value.replace(/\s+/g, ' ').trim();

const treatmentMessage = (treatmentName) =>
  `Hola, vi el tratamiento de ${normalizeSubject(treatmentName)} en el sitio web de Derma.M y me gustaría recibir más información.`;

const categoryMessage = (categoryName) =>
  `Hola, vi la sección de ${normalizeSubject(categoryName)} en el sitio web de Derma.M y me gustaría recibir orientación sobre las opciones disponibles.`;

const staticRouteMessages = {
  '/': 'Hola, visité el sitio web de Derma.M y me gustaría recibir información sobre sus tratamientos y valoraciones.',
  '/nosotros': 'Hola, vi la página Nosotros en el sitio web de Derma.M y me gustaría conocer más sobre su equipo y enfoque profesional.',
  '/contacto': 'Hola, vi la página de contacto en el sitio web de Derma.M y me gustaría recibir orientación para agendar una valoración.',
  '/limpieza-facial-profunda': treatmentMessage('Limpieza Facial Profunda'),
  '/prf-y-fibrina': treatmentMessage('PRP y Fibrina'),
  '/tratamientos-postoperatorios': treatmentMessage('Tratamientos Postoperatorios'),
  '/politica-de-privacidad': 'Hola, estoy consultando la Política de Privacidad en el sitio web de Derma.M y tengo una pregunta.',
  '/privacy-policy': 'Hola, estoy consultando la Política de Privacidad en el sitio web de Derma.M y tengo una pregunta.',
  '/terminos-de-uso': 'Hola, estoy consultando los Términos de Uso en el sitio web de Derma.M y tengo una pregunta.',
  '/terms-of-use': 'Hola, estoy consultando los Términos de Uso en el sitio web de Derma.M y tengo una pregunta.',
  '/treatment-disclaimer': 'Hola, estoy consultando el aviso sobre tratamientos en el sitio web de Derma.M y tengo una pregunta.',
  '/tratamientos-disclaimer': 'Hola, estoy consultando el aviso sobre tratamientos en el sitio web de Derma.M y tengo una pregunta.',
  '/booking-cancellation-refund-policy': 'Hola, estoy consultando la política de reservas, cancelaciones y reembolsos de Derma.M y tengo una pregunta.',
  '/accessibility': 'Hola, estoy consultando la información de accesibilidad del sitio web de Derma.M y necesito orientación.',
  '/notice-of-privacy-practices': 'Hola, estoy consultando el aviso de prácticas de privacidad en el sitio web de Derma.M y tengo una pregunta.',
  '/legal': 'Hola, estoy consultando los recursos legales en el sitio web de Derma.M y tengo una pregunta.'
};

const categoryLabels = {
  faciales: 'Tratamientos Faciales',
  corporales: 'Tratamientos Corporales',
  laserYLuz: 'Láser y Luz',
  dentalEstetico: 'Estética Dental',
  ivTherapy: 'IV Therapy',
  capilar: 'Tratamientos Capilares'
};

const categoryRouteMessages = Object.fromEntries(
  Object.entries(categoryPages).map(([categoryKey, page]) => [
    normalizePathname(page.route),
    categoryMessage(categoryLabels[categoryKey] || page.hero?.eyebrow || page.slug)
  ])
);

const treatmentRouteMessages = Object.fromEntries(
  Object.values(treatmentPages).flatMap((categoryTreatments) =>
    Object.values(categoryTreatments).map((treatment) => [
      normalizePathname(treatment.route),
      treatmentMessage(treatment.title)
    ])
  )
);

export const whatsappRouteMessages = {
  ...staticRouteMessages,
  ...categoryRouteMessages,
  ...treatmentRouteMessages
};

export const defaultWhatsAppMessage =
  'Hola, visité el sitio web de Derma.M y me gustaría recibir más información.';

export function getWhatsAppMessage(pathname) {
  return whatsappRouteMessages[normalizePathname(pathname)] || defaultWhatsAppMessage;
}
