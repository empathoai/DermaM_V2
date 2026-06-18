# Derma.M — Product & Technical Reference
# Version: 1.0 — June 2026
# Read this before touching any file in the project.

---

## Project Identity

- **Project:** Derma.M website
- **URL:** https://dermamskinhealth.com (canonical — no www, no trailing slash)
- **Business:** DERMA.M, LLC — med spa
- **Locations:** West Palm Beach FL + Miami FL
- **Hosting:** Hostinger — Apache server
- **Primary language:** Spanish. Legal pages: bilingual ES/EN.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Vite + React 19 |
| Routing | React Router v7 |
| SEO | react-helmet-async |
| Styling | Tailwind v4 + CSS Modules (co-located) |
| Animation | motion v12 — `import { motion } from 'motion/react'` |
| Icons | lucide-react |
| Package manager | npm |
| Language | JavaScript JSX — TypeScript installed as devDep but not used |

**Do NOT introduce:** Next.js, styled-components, Framer Motion, any new CSS framework.

---

## Routing — src/routes.jsx

All routes mirror SITE_ARCHITECTURE.md.

```
/                                     → src/pages/Home.jsx
/nosotros                             → src/pages/Nosotros.jsx
/contacto                             → src/pages/Contacto.jsx

/faciales                             → src/pages/hubs/Faciales.jsx
/faciales/:treatment                  → src/pages/treatments/faciales/[treatment].jsx
/corporales                           → src/pages/hubs/Corporales.jsx
/corporales/:treatment                → src/pages/treatments/corporales/[treatment].jsx
/laser-y-luz                          → src/pages/hubs/LaserYLuz.jsx
/laser-y-luz/:treatment               → src/pages/treatments/laser/[treatment].jsx
/dental-estetico                      → src/pages/hubs/DentalEstetico.jsx
/dental-estetico/:treatment           → src/pages/treatments/dental/[treatment].jsx
/iv-therapy                           → src/pages/hubs/IvTherapy.jsx
/capilar                              → src/pages/hubs/Capilar.jsx
/capilar/:treatment                   → src/pages/treatments/capilar/[treatment].jsx

/limpieza-facial-profunda             → src/pages/landings/LimpiezaFacial.jsx
/prf-y-fibrina                        → src/pages/landings/PrfYFibrina.jsx
/tratamientos-postoperatorios         → src/pages/landings/Postoperatorios.jsx

/politica-de-privacidad               → src/pages/PrivacyPolicy.jsx (canonical)
/privacy-policy                       → src/pages/PrivacyPolicy.jsx (alias — non-canonical)
/terminos-de-uso                      → src/pages/TermsOfUse.jsx (canonical)
/terms-of-use                         → src/pages/TermsOfUse.jsx (alias — non-canonical)
/treatment-disclaimer                 → src/pages/TreatmentDisclaimer.jsx (canonical)
/tratamientos-disclaimer              → src/pages/TreatmentDisclaimer.jsx (alias — non-canonical)
/booking-cancellation-refund-policy   → src/pages/BookingPolicy.jsx
/accessibility                        → src/pages/Accessibility.jsx
/notice-of-privacy-practices          → src/pages/NoticePrivacyPractices.jsx (noindex — draft)
/legal                                → src/pages/LegalResources.jsx
```

---

## Folder Structure

```
src/
├── main.jsx                        ← Vite entry + HelmetProvider + Router
├── routes.jsx                      ← All route definitions
├── index.css                       ← Global styles + design tokens (CSS custom properties)
├── App.jsx
│
├── data/                           ← ALL page content — source of truth for copy
│   ├── aboutPage.js
│   ├── categoryPages.js            ← Hub pages content + treatment cards
│   ├── landingPages.js             ← 3 landing pages content
│   └── treatmentPages.js           ← All treatment detail pages content
│
├── pages/
│   ├── Home.jsx
│   ├── Nosotros.jsx
│   ├── Contacto.jsx
│   ├── PrivacyPolicy.jsx
│   ├── TermsOfUse.jsx
│   ├── TreatmentDisclaimer.jsx
│   ├── BookingPolicy.jsx
│   ├── Accessibility.jsx
│   ├── NoticePrivacyPractices.jsx  ← noindex — do not publish until legal review
│   ├── LegalResources.jsx
│   ├── hubs/                       ← 6 category hub pages
│   ├── treatments/                 ← 5 dynamic treatment routes
│   └── landings/                   ← 3 landing pages
│
├── components/
│   ├── layout/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── LegalPageLayout.jsx
│   ├── sections/                   ← Home-specific sections
│   │   ├── Hero/
│   │   ├── TrustBar/
│   │   ├── FeaturedServices/
│   │   ├── TreatmentCategories/
│   │   ├── ClinicalPositioning/
│   │   ├── MethodProcess/
│   │   ├── Testimonials/
│   │   ├── FounderSection/
│   │   ├── FinalCTA/
│   │   └── PageHero/
│   ├── shared/                     ← Reusable across all page types
│   │   ├── BeforeAfterGrid/
│   │   ├── BenefitColumns/
│   │   ├── Breadcrumb/
│   │   ├── FAQAccordion/
│   │   ├── FinalCTA/
│   │   ├── FloatingWhatsApp/
│   │   ├── MediaBlock/
│   │   ├── ProcessTimeline/
│   │   ├── RelatedTreatments/
│   │   ├── SectionHeader/
│   │   ├── SpecsGrid/
│   │   ├── TeamBySpecialty/
│   │   ├── TeamMemberCard/
│   │   ├── TestimonialsSection/
│   │   ├── TreatmentCard/
│   │   ├── TreatmentGrid/
│   │   ├── TreatmentHero/
│   │   ├── TreatmentQuickFacts/
│   │   ├── TrustSafetyBar/
│   │   └── WarningBox/
│   ├── templates/                  ← Full page templates driven by data files
│   │   ├── AboutPage/
│   │   ├── CategoryPage/
│   │   ├── LandingPage/
│   │   └── TreatmentDetailPage/
│   └── utils/
│       ├── motion.js
│       └── ScrollToTop.jsx

public/
├── .htaccess       ← DO NOT MODIFY — Apache redirects, HTTPS, non-www, SPA fallback
├── robots.txt      ← DO NOT MODIFY — crawl rules
├── sitemap.xml     ← Update when adding pages — 47 URLs currently
├── llms.txt        ← AI crawler guide — update when adding pages
└── assets/images/  ← follows ASSETS_STRUCTURE.md exactly
```

---

## CSS Architecture

- **Tailwind v4** for layout utilities, spacing, responsive modifiers
- **CSS Modules** for component-specific styles (.module.css co-located with component)
- **Design tokens** defined as CSS custom properties in `src/index.css`
- Never hardcode hex values in components — always use token variables
- CSS nesting: max 2 levels deep
- Mobile-first — base styles for mobile, layer up with min-width
- Breakpoints: 640px, 768px, 1024px, 1280px

---

## Data Architecture

Page content lives in `src/data/` — not inside components.

- To update copy → edit the data file
- To update images → update the image path in the data file
- Templates consume data files and render the UI
- Never hardcode strings, image paths, or copy inside JSX components

---

## SEO Requirements

Every page Helmet block must include:

```jsx
<Helmet>
  <title>[keyword + location + brand — 50-60 chars]</title>
  <meta name="description" content="[150-160 chars]" />
  <link rel="canonical" href="https://dermamskinhealth.com/[path]" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:url" content="https://dermamskinhealth.com/[path]" />
  <meta property="og:image" content="https://dermamskinhealth.com/assets/images/..." />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="..." />
  <meta name="twitter:description" content="..." />
  <meta name="twitter:image" content="https://dermamskinhealth.com/assets/images/..." />
  <meta name="robots" content="index, follow" />
</Helmet>
```

Exceptions — use `noindex, nofollow`:
- `/notice-of-privacy-practices` — HIPAA draft, not approved for publication
- Alias routes (non-canonical duplicates)

---

## Schema / JSON-LD

Use these types — no others:

| Page type | Schema |
|---|---|
| Home | `HealthAndBeautyBusiness` + `WebSite` |
| Contacto | `ContactPage` + `HealthAndBeautyBusiness` |
| Nosotros | `AboutPage` + `HealthAndBeautyBusiness` |
| Category hubs | `ItemList` |
| Treatment pages | `Service` with `serviceType: "Aesthetic Treatment"` |
| Landing pages | `Service` with `serviceType: "Aesthetic Treatment"` |
| FAQ sections | `FAQPage` |

**Never use:** `MedicalClinic`, `MedicalProcedure`, `LocalBusiness` alone.

### Confirmed business data for schemas:

```javascript
name: "Derma.M"
legalName: "DERMA.M, LLC"
url: "https://dermamskinhealth.com"
telephone: "+15612535384"
email: "info@dermamskinhealth.com"

locations: [
  {
    name: "Derma.M — West Palm Beach",
    streetAddress: "5707 S Dixie Hwy UNIT D",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33405"
  },
  {
    name: "Derma.M — Miami",
    streetAddress: "4960 SW 72nd Ave Ste 203",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33155"
  }
]
```

---

## Environment Variables

```
VITE_SITE_URL=https://dermamskinhealth.com
VITE_WHATSAPP_NUMBER=+15612535384
VITE_SQUARE_BOOKING_URL=[NEEDS CLIENT CONFIRMATION]
```

Never commit `.env`. Access via `import.meta.env.VITE_*`.

---

## Accessibility — WCAG 2.1 AA

- Color contrast: 4.5:1 normal, 3:1 large text
- One `<h1>` per page
- Semantic HTML throughout
- Visible focus indicators — min 2px outline
- Skip-to-content as first focusable element
- ARIA landmarks and labels
- Focus managed on route changes
- `prefers-reduced-motion` respected in all animations

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Animation

- Package: `motion` v12 — already installed
- Import: `import { motion } from 'motion/react'`
- Entrance: `620ms cubic-bezier(.2, .8, .2, 1)`
- Hover/state: `180ms ease`
- Always respect `prefers-reduced-motion`

---

## Medical Copy Compliance

These rules apply to all content in data files and components:

- Never claim guaranteed results — use "may help improve", "designed to support"
- Never use: "no side effects", "painless", "permanent", "no downtime", "guaranteed", "FDA-approved", "clinically proven" — unless confirmed in writing by client
- Always include under treatment CTAs: `"Requiere valoración médica previa para garantizar tu seguridad y resultados."`
- Footer disclaimer must always be visible — never collapsed or hidden
- Before/after images: only real client-provided images — never stock
- Testimonials: only confirmed real reviews — never invented
- Never diagnose, prescribe, or claim to cure any condition
