import React from 'react';
import { Helmet } from 'react-helmet-async';
import { titleCase } from '../../../utils/text';

const SITE = 'https://dermamskinhealth.com';

// Palabras funcionales del español: minúscula cuando NO son la primera palabra.
// titleCase() (compartido) las capitaliza; esto restaura la forma canónica de
// la entidad (p. ej. "Plasma Rico en Plaquetas y Fibrina" — DECISIONS 2026-08-27).
const MINOR = new Set([
  'de', 'del', 'la', 'el', 'los', 'las', 'y', 'e', 'o', 'u',
  'en', 'con', 'para', 'por', 'a', 'al', 'un', 'una',
]);

const minorWords = (s = '') =>
  s
    .split(' ')
    .map((w, i) => (i > 0 && MINOR.has(w.toLowerCase()) ? w.toLowerCase() : w))
    .join(' ');

const abs = (path = '') =>
  path.startsWith('http') ? path : `${SITE}${path === '/' ? '/' : path}`;

/**
 * Full <head> for a category hub page: title, description, canonical, robots,
 * Open Graph / Twitter, and a CollectionPage + BreadcrumbList JSON-LD @graph.
 * The ItemList is derived from data.featuredTreatments (single source of truth);
 * complementaryTreatments is intentionally ignored (its CTAs point to /contacto).
 */
export default function CategorySEO({ data }) {
  if (!data) return null;

  const url = `${SITE}${data.route}`;
  const title = data.metaTitle;
  const description = data.metaDescription;
  const image = `${SITE}/assets/images/global/og-default.jpg`;

  const featured = (data.featuredTreatments && data.featuredTreatments.treatments) || [];
  const items = featured
    .map((t) => ({
      name: t.listName || minorWords(titleCase(t.title || '')),
      url: t.to || t.link,
    }))
    .filter((x) => x.url)
    .map((x, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: x.name,
      url: abs(x.url),
    }));

  const collectionPage = {
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#organization` },
  };
  if (items.length) {
    collectionPage.mainEntity = { '@type': 'ItemList', itemListElement: items };
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: (data.breadcrumb || []).map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.label,
      item: abs(b.link),
    })),
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [collectionPage, breadcrumb],
  };

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
