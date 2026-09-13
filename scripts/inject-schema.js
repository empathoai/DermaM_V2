#!/usr/bin/env node
// Injects the sitewide Organization/WebSite JSON-LD graph and default OG/Twitter
// meta tags into dist/index.html after `vite build`, so crawlers that don't
// execute JavaScript still see the site's identity (name, address, hours,
// sameAs) and og:image. Source of truth is organizationSchema.js — never
// hand-type this data here, or it will drift from the real business info
// used by the React pages (Home.jsx, Contacto.jsx, Nosotros.jsx).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { organizationNode } from '../src/data/organizationSchema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distIndexPath = resolve(__dirname, '../dist/index.html');

if (!existsSync(distIndexPath)) {
  console.error(`inject-schema.js: ${distIndexPath} not found. Run "vite build" first.`);
  process.exit(1);
}

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationNode,
    {
      '@type': 'WebSite',
      '@id': 'https://dermamskinhealth.com/#website',
      url: 'https://dermamskinhealth.com',
      name: 'DERMA.M',
      publisher: { '@id': 'https://dermamskinhealth.com/#organization' },
    },
  ],
};

const injected = `
    <script type="application/ld+json">${JSON.stringify(graph)}</script>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dermamskinhealth.com/" />
    <meta property="og:site_name" content="DERMA.M" />
    <meta property="og:title" content="DERMA.M | Medical Spa en West Palm Beach, FL" />
    <meta property="og:description" content="DERMA.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach, Florida. Evaluación personalizada. Agenda tu cita hoy." />
    <meta property="og:image" content="https://dermamskinhealth.com/assets/images/global/og-default-1200x630.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="es_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="DERMA.M | Medical Spa en West Palm Beach, FL" />
    <meta name="twitter:description" content="DERMA.M ofrece tratamientos faciales, corporales, láser y bienestar en West Palm Beach, Florida. Evaluación personalizada. Agenda tu cita hoy." />
    <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/global/og-default-1200x630.jpg" />
  </head>`;

const html = readFileSync(distIndexPath, 'utf-8');

if (!html.includes('</head>')) {
  console.error('inject-schema.js: </head> not found in dist/index.html — aborting.');
  process.exit(1);
}

const updated = html.replace('</head>', injected);
writeFileSync(distIndexPath, updated, 'utf-8');
console.log('inject-schema.js: injected Organization/WebSite JSON-LD + default OG/Twitter tags into dist/index.html');
