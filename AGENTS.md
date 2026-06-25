# Derma.M — Front-End Development Standards
# Custom configured rules for AI-assisted development
# Version: 2.0 — Updated June 2026 post AI Studio redesign

## IMPORTANT: Development Standards

You are an expert front-end developer building the Derma.M website.
Write clean, maintainable, production-grade code.
Follow these standards for every file you create or modify.
Prioritize semantic HTML, accessibility, performance, and security.
Never cut corners on standards compliance — these rules are non-negotiable.

## Visual rules
Strictly follow the rules defined in @DESIGN.md for all UI generation.
Don't invent colors, fonts or spacing outside of the design system.
Before generating any visual components, read @DESIGN.md completely.
Also read @PRODUCT.md for project identity, routing, and Derma.M-specific rules.

## Framework & Core Dependencies

- Framework: Vite + React 19
- Routing: React Router v7 — route definitions in src/routes.jsx
- SEO & Metadata: react-helmet-async — HelmetProvider at root, Helmet per page
- Styling: Tailwind v4 + CSS Modules (co-located per component)
- Animation: motion v12 — `import { motion } from 'motion/react'`
- Icons: lucide-react
- Package manager: npm
- Language: JavaScript JSX — TypeScript installed as devDep but JSX is the standard

Do NOT introduce: Next.js, styled-components, Framer Motion, any new CSS framework.

### Routing Structure
Route definitions in src/routes.jsx — mirror SITE_ARCHITECTURE.md:

```
/                                         → src/pages/Home.jsx
/nosotros                                 → src/pages/Nosotros.jsx
/contacto                                 → src/pages/Contacto.jsx
/faciales                                 → src/pages/hubs/Faciales.jsx
/faciales/:treatment                      → src/pages/treatments/faciales/[treatment].jsx
/corporales                               → src/pages/hubs/Corporales.jsx
/corporales/:treatment                    → src/pages/treatments/corporales/[treatment].jsx
/laser-y-luz                              → src/pages/hubs/LaserYLuz.jsx
/laser-y-luz/:treatment                   → src/pages/treatments/laser/[treatment].jsx
/dental-estetico                          → src/pages/hubs/DentalEstetico.jsx
/dental-estetico/:treatment               → src/pages/treatments/dental/[treatment].jsx
/iv-therapy                               → src/pages/hubs/IvTherapy.jsx
/capilar                                  → src/pages/hubs/Capilar.jsx
/capilar/:treatment                       → src/pages/treatments/capilar/[treatment].jsx
/limpieza-facial-profunda                 → src/pages/landings/LimpiezaFacial.jsx
/prf-y-fibrina                            → src/pages/landings/PrfYFibrina.jsx
/tratamientos-postoperatorios             → src/pages/landings/Postoperatorios.jsx
/politica-de-privacidad                   → src/pages/PrivacyPolicy.jsx (canonical)
/privacy-policy                           → src/pages/PrivacyPolicy.jsx (alias — non-canonical)
/terminos-de-uso                          → src/pages/TermsOfUse.jsx (canonical)
/terms-of-use                             → src/pages/TermsOfUse.jsx (alias — non-canonical)
/treatment-disclaimer                     → src/pages/TreatmentDisclaimer.jsx (canonical)
/tratamientos-disclaimer                  → src/pages/TreatmentDisclaimer.jsx (alias — non-canonical)
/booking-cancellation-refund-policy       → src/pages/BookingPolicy.jsx
/accessibility                            → src/pages/Accessibility.jsx
/notice-of-privacy-practices              → src/pages/NoticePrivacyPractices.jsx (noindex — draft)
/legal                                    → src/pages/LegalResources.jsx
```

### Folder Structure

```
src/
├── main.jsx                    ← Vite entry + HelmetProvider + Router
├── routes.jsx                  ← All route definitions
├── index.css                   ← Global styles + design tokens (CSS custom properties)
├── App.jsx
├── data/                       ← ALL page content — source of truth for copy
│   ├── aboutPage.js
│   ├── categoryPages.js
│   ├── landingPages.js
│   └── treatmentPages.js
├── pages/
│   ├── Home.jsx
│   ├── Nosotros.jsx
│   ├── Contacto.jsx
│   ├── Contacto.module.css
│   ├── PrivacyPolicy.jsx
│   ├── TermsOfUse.jsx
│   ├── TreatmentDisclaimer.jsx
│   ├── BookingPolicy.jsx
│   ├── Accessibility.jsx
│   ├── NoticePrivacyPractices.jsx  ← noindex — HIPAA draft, not for publication
│   ├── LegalResources.jsx
│   ├── PageShell.module.css
│   ├── hubs/
│   │   ├── Faciales.jsx
│   │   ├── Corporales.jsx
│   │   ├── LaserYLuz.jsx
│   │   ├── DentalEstetico.jsx
│   │   ├── IvTherapy.jsx
│   │   └── Capilar.jsx
│   ├── treatments/
│   │   ├── faciales/[treatment].jsx
│   │   ├── corporales/[treatment].jsx
│   │   ├── laser/[treatment].jsx
│   │   ├── dental/[treatment].jsx
│   │   └── capilar/[treatment].jsx
│   └── landings/
│       ├── LimpiezaFacial.jsx
│       ├── PrfYFibrina.jsx
│       └── Postoperatorios.jsx
├── components/
│   ├── layout/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   └── LegalPageLayout.jsx
│   ├── sections/               ← Home-specific sections
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
│   ├── shared/                 ← Reusable across all page types
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
│   ├── templates/              ← Full page templates driven by data files
│   │   ├── AboutPage/
│   │   ├── CategoryPage/
│   │   ├── LandingPage/
│   │   └── TreatmentDetailPage/
│   └── utils/
│       ├── motion.js
│       └── ScrollToTop.jsx
├── styles/
│   └── (tokens live in src/index.css)

public/
├── .htaccess       ← DO NOT MODIFY without explicit instruction
├── robots.txt      ← DO NOT MODIFY without explicit instruction
├── sitemap.xml     ← Update when adding new pages
├── llms.txt        ← AI crawler guide — update when adding pages
└── assets/
    └── images/     ← follows ASSETS_STRUCTURE.md exactly
```

## Code Style: React (JSX + CSS)

- Functional components with hooks — no class components
- Co-locate styles with components (CSS Modules)
- Props for customization, composition over inheritance
- Keep components small and focused — one responsibility each
- Use React.memo() only for measured performance bottlenecks
- Prefer controlled components for forms
- Type props with PropTypes
- Separate presentational and container logic
- Content lives in src/data/ — never hardcode copy inside components

## CSS Architecture: Module-Scoped

- Tailwind v4 for layout utilities, spacing, responsive modifiers
- CSS Modules for component-specific styles — one .module.css per component
- No global styles beyond src/index.css
- Each component owns its own styles completely
- Compose components — never share styles across them
- Use data attributes for state-based variations (data-state, data-variant)

### CSS Custom Properties
- All design tokens defined as custom properties in src/index.css
- Organize tokens by category: color, typography, spacing, layout, borders, transitions
- Use semantic names per DESIGN.md token system
- Never hardcode hex values in components — always use token variables

### CSS Nesting
- Use native CSS nesting for related selectors
- Limit nesting depth to 2 levels maximum
- Nest pseudo-classes (&:hover, &:focus) and pseudo-elements (&::before)
- Nest media queries within their component context using @media
- Do not nest unrelated selectors

### Responsive Approach: Mobile-First
- Write base styles for mobile, layer up with min-width media queries
- Standard breakpoints: 640px, 768px, 1024px, 1280px
- Use clamp() for fluid typography and spacing where appropriate

## Accessibility: WCAG Level AA

- Target WCAG 2.1 AA compliance as the minimum standard
- Color contrast: 4.5:1 for normal text, 3:1 for large text (18px+ bold or 24px+)
- Text resizable up to 200% without loss of content or functionality
- Avoid images of text — use real, selectable text
- Multiple ways to find pages (navigation, search, sitemap)
- Consistent navigation patterns across all pages
- Form inputs have visible labels and descriptive error messages
- Focus order matches the visual reading order

### ARIA
- Use ARIA landmarks: banner, navigation, main, contentinfo
- Add aria-label to distinguish repeated navigation regions
- Use ARIA roles only when semantic HTML is insufficient
- Prefer native elements: <nav> over role="navigation", <button> over role="button"
- Never use aria-hidden="true" on focusable elements

### Focus Management
- Visible focus indicators on all interactive elements (min 2px outline)
- Custom focus styles that maintain at least 3:1 contrast with adjacent colors
- Focus trap inside modals and dialogs
- Return focus to trigger element when closing overlays
- Skip-to-content link as first focusable element on every page
- Manage focus programmatically on route changes

### Reduced Motion
- Respect prefers-reduced-motion in all animation code

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Screen Readers
- Include .sr-only utility in index.css:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

- Use aria-live="polite" for non-urgent dynamic updates
- Announce route changes in SPA via aria-live region

## SEO Per Page

Every page must include a Helmet block with:
- title (50-60 chars, keyword + location + brand)
- meta description (150-160 chars)
- canonical URL (absolute — https://dermamskinhealth.com/path)
- og:title, og:description, og:url, og:image
- twitter:card, twitter:title, twitter:description, twitter:image
- robots: index, follow (except noindex pages — see below)

Canonical domain: https://dermamskinhealth.com — no www, no trailing slash.

noindex, nofollow pages:
- /notice-of-privacy-practices — HIPAA draft, not approved
- /privacy-policy, /terms-of-use, /tratamientos-disclaimer — non-canonical aliases

### Structured Data (JSON-LD)
Inject via dangerouslySetInnerHTML inside <script type="application/ld+json">.

Schema types by page:
- Home: HealthAndBeautyBusiness (both locations) + WebSite
- Contacto: ContactPage + HealthAndBeautyBusiness
- Nosotros: AboutPage + HealthAndBeautyBusiness
- Category hubs: ItemList
- Treatment detail pages: Service with serviceType "Aesthetic Treatment"
- Landing pages: Service with serviceType "Aesthetic Treatment"
- FAQ sections: FAQPage

Do NOT use: MedicalClinic, MedicalProcedure, LocalBusiness alone.

### Sitemap
public/sitemap.xml — 47 URLs currently indexed.
Update sitemap.xml and llms.txt whenever a new page is added.
Reference in public/robots.txt: Sitemap: https://dermamskinhealth.com/sitemap.xml

### Fonts
Poppins loaded via Google Fonts or @import in index.css.
Hamilton loaded via @font-face — self-hosted in public/assets/fonts/.
Tokens: --font-sans, --font-script

### Environment Variables
Store in .env — never commit to version control.
- VITE_SITE_URL=https://dermamskinhealth.com
- VITE_WHATSAPP_NUMBER=+15612535384
- VITE_SQUARE_BOOKING_URL=[NEEDS CLIENT CONFIRMATION]
Access: import.meta.env.VITE_VARIABLE_NAME

### Images
Follow ASSETS_STRUCTURE.md exactly. Every image slot is unique — no sharing between sections.
- hero.jpg = hero background for that page only
- overview.jpg = overview section image for hub pages (different from hero)
- card.jpg = when a landing treatment appears as a card inside a hub
- cta.jpg = final CTA background for that page only

```html
<img
  src="/assets/images/[path]/[name].jpg"
  alt="[descriptive — never empty, never 'image']"
  width="[explicit]"
  height="[explicit]"
  loading="lazy"    /* all below-fold */
  loading="eager"   /* hero only */
/>
```

## Security

### XSS Prevention
- Sanitize all user input before rendering in DOM
- Use textContent instead of innerHTML for user-provided data
- Never construct HTML strings with template literals from user input

### HTTPS & Transport Security
- Enforced via public/.htaccess — do not remove
- HSTS header set via .htaccess

### Environment Variables & Secrets
- Never expose API keys or secrets in client-side code
- Use VITE_ prefix only for variables safe to expose to the browser
- Add .env to .gitignore — never commit secrets

### Dependency Security
- Run npm audit regularly and fix critical vulnerabilities
- Use lockfiles for reproducible builds

### Form Security
- Validate input on both client and server
- Rate-limit form submissions on the server
- Use POST for state-changing operations

## Semantic HTML

- Use semantic elements: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>
- One <main> element per page
- One <h1> per page — heading hierarchy reflects content structure
- Use <figure> and <figcaption> for images with captions
- <button> for actions, <a> for navigation — never the reverse
- Use <address> for contact information

## Performance

- Lazy load images below the fold: loading="lazy"
- Provide explicit width and height on all <img> and <video>
- Use responsive images with srcset and sizes
- Preload critical resources: <link rel="preload">
- Defer non-critical JavaScript: <script defer>
- Use font-display: swap for web fonts
- Set Cache-Control headers for static assets (configured in .htaccess)

## Medical Copy Compliance

These rules apply to all content — data files, components, and copy:

- Never claim guaranteed results — use "may help improve", "designed to support"
- Never use: "no side effects", "painless", "permanent", "no downtime", "guaranteed",
  "FDA-approved", "clinically proven" — unless confirmed in writing by client
- Always include under treatment CTAs:
  "Requiere valoración médica previa para garantizar tu seguridad y resultados."
- Footer disclaimer must always be visible — never collapsed or hidden
- Before/after images: only real client-provided images — never stock
- Testimonials: only confirmed real reviews — never invented
- Never diagnose, prescribe, or claim to cure any condition

## Agent Operating Rules

- **Base Design:** Strictly follow @DESIGN.md. Read it before any visual work.
- **Project rules:** Read @PRODUCT.md for Derma.M identity, locations, schemas, and confirmed data.
- **Memory restriction:** Do not reference other projects — limit to this repository only.
- **Authorization required:** Do not modify anything outside the specified task scope.
- **Content:** Lives in src/data/ — update data files, not components.
- **New pages:** Must be added to routes.jsx, sitemap.xml, and llms.txt.
- **Public files:** Do not modify .htaccess, robots.txt, sitemap.xml, llms.txt without explicit instruction.
- **Schemas:** Use HealthAndBeautyBusiness and Service — never MedicalClinic or MedicalProcedure.

## Available Project Skills

- **assets-optimizer:** Converts PNG images to web-optimized JPGs (under 200KB) and compresses MP4 background videos using FFmpeg for web performance.
- **impeccable:** Design, redesign, audit, polish, animate frontend interfaces. Commands: craft, animate, polish, audit, bolder, typeset, distill, adapt, quieter, critique, clarify, colorize, overdrive, delight, layout.
- **interaction-design:** Microinteractions, motion design, transitions. Use `motion` package (already installed).
- **engram:** Save current project state and produce a continuation prompt for the next session.
- **create-skill:** Guides the creation and bootstrapping of new workspace-specific or global agent skills.

## CSS Advanced — Missing Sections

### Logical Properties
- Use logical properties instead of physical ones for internationalization support
- margin-inline, padding-block instead of margin-left, padding-top
- inline-size and block-size instead of width and height
- inset-inline-start instead of left
- border-inline-end instead of border-right
- This ensures layouts adapt correctly for RTL languages

### Container Queries
- Use container queries for component-level responsive design
- Define containers with container-type: inline-size on wrapper elements
- Components respond to their container size, not the viewport
- Use @container for adapting layout within reusable components
- Combine with media queries: viewport for page layout, container for components

## Accessibility — Color & Contrast

- Test all color combinations against WCAG contrast requirements
- Never use color alone to convey meaning (errors, status, categories)
- Provide text labels, icons, or patterns alongside color indicators
- Validate with color-blindness simulation tools (protanopia, deuteranopia, tritanopia)
- Ensure focus indicators are visible against all background colors

## Security — Full Rules

### Content Security Policy (CSP)
- Set Content-Security-Policy headers to restrict resource loading
- Define directives: script-src, style-src, img-src, font-src, connect-src
- Use nonce-based CSP for inline scripts: script-src 'nonce-{random}'
- Avoid 'unsafe-inline' and 'unsafe-eval' — they defeat the purpose of CSP
- Set default-src 'self' as the baseline and explicitly allow exceptions
- Test in Content-Security-Policy-Report-Only mode before enforcing
- Include frame-ancestors 'self' to prevent clickjacking

### Subresource Integrity (SRI)
- Add integrity attributes to all external <script> and <link> tags
- Generate SRI hashes (SHA-384 or SHA-512) for third-party resources
- Include crossorigin="anonymous" on SRI-protected resources
- Regenerate hashes when updating external resource versions
- Example: <script src="..." integrity="sha384-..." crossorigin="anonymous"></script>

### Cookie Security
- Set HttpOnly on authentication and session cookies (prevents JS access)
- Set Secure flag to ensure cookies are only sent over HTTPS
- Set SameSite=Strict for sensitive cookies, SameSite=Lax as the minimum
- Minimize cookie scope with appropriate Path and Domain attributes
- Set reasonable expiration — session cookies for auth, short-lived for preferences
- Never store sensitive data (tokens, PII) in cookies accessible to JavaScript

### CORS Configuration
- Configure Access-Control-Allow-Origin precisely — never use wildcard (*) with credentials
- Restrict Access-Control-Allow-Methods to only the HTTP methods needed
- Restrict Access-Control-Allow-Headers to only the headers needed
- Handle preflight (OPTIONS) requests properly
- Set Access-Control-Max-Age to cache preflight responses and reduce requests
- Validate the Origin header server-side before reflecting it
