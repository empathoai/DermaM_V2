// Single source of truth for site-wide meta strings that must stay in sync
// across every hero. Change here, never inline. See DECISIONS.md 2026-08-28
// (hero sub-tag NAP consistency).

export const HERO_LOCAL_TAG = 'Medical Spa · West Palm Beach, FL';

// Mandatory pre-treatment notice shown under every treatment CTA.
// Invariable literal — see docs/MEDICAL_COMPLIANCE.md and DECISIONS.md 2026-08-30
// ("valoración profesional previa", not "médica": true for every service, med spa ≠ clínica).
export const MEDICAL_VALUATION_NOTICE =
  'Requiere valoración profesional previa para garantizar tu seguridad y resultados.';

// Canonical outbound link to the live Google Business Profile review panel.
// Single source — never inline. Trust signal for the on-page curated quotes,
// which carry NO aggregateRating / Review schema (audit 8.18). See
// docs/superpowers/specs/2026-08-31-google-reviews-outbound-link-design.md
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA';
