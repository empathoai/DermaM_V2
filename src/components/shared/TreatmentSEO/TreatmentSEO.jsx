import React from 'react';
import { Helmet } from 'react-helmet-async';
import { titleCase, clampWords } from '../../../utils/text';

const SITE = 'https://dermamskinhealth.com';

const HUB = {
  'faciales': 'Tratamientos Faciales',
  'corporales': 'Tratamientos Corporales',
  'laser-y-luz': 'Tratamientos Láser y Luz',
  'dental-estetico': 'Estética Dental',
  'capilar': 'Tratamientos Capilares',
};

/**
 * Full <head> for a treatment detail page: title, description, canonical, robots,
 * Open Graph / Twitter, and one JSON-LD @graph — Service + BreadcrumbList, plus
 * FAQPage (when data.faq is present) and MedicalWebPage (when data.contentUpdated),
 * all linked by @id. On treatment routes FAQAccordion is rendered with
 * emitSchema={false} so this is the only ld+json block.
 */
export default function TreatmentSEO({ data, categorySlug, slug }) {
  if (!data) return null;

  const name = titleCase(data.title || '');
  const url = `${SITE}/${categorySlug}/${slug}`;
  const hubName = HUB[categorySlug] || 'Tratamientos';

  const titleWithGeo = `${name} en West Palm Beach | Derma.M`;
  const title = data.metaTitle || (titleWithGeo.length <= 60 ? titleWithGeo : `${name} | Derma.M`);

  const description = data.metaDescription || clampWords(
    `${data.description || ''} ${name} en Derma.M, West Palm Beach. Requiere valoración profesional previa.`,
    155
  );

  const image = data.image ? `${SITE}${data.image}` : `${SITE}/assets/images/global/og-default.jpg`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name,
        description,
        url,
        serviceType: 'Aesthetic Treatment',
        image,
        areaServed: { '@type': 'City', name: 'West Palm Beach' },
        provider: {
          '@type': 'HealthAndBeautyBusiness',
          '@id': `${SITE}/#organization`,
          name: 'Derma.M',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: hubName, item: `${SITE}/${categorySlug}` },
          { '@type': 'ListItem', position: 3, name, item: url },
        ],
      },
    ],
  };

  if (data.contentUpdated) {
    graph['@graph'].push({
      '@type': 'MedicalWebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      inLanguage: 'es',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${url}#service` },
      dateModified: data.contentUpdated,
    });
  }

  if (Array.isArray(data.faq) && data.faq.length > 0) {
    graph['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: 'es',
      about: { '@id': `${url}#service` },
      mainEntity: data.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}
