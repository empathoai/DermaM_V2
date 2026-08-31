# Google Reviews Outbound Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a verifiable "Ver reseñas en Google" outbound link — pointing at the live Google Business Profile — to every testimonials surface and to the footer, and unify the reviews eyebrow copy to `GOOGLE REVIEWS`.

**Architecture:** One shared constant (`GOOGLE_REVIEWS_URL` in `src/data/siteMeta.js`) and one shared presentational component (`GoogleReviewsLink`) with a `tone` prop for light/dark backgrounds. Five call sites render the component; no layout, grid, or card markup changes anywhere. The component is the single source for the URL, the markup, and the accessibility affordances.

**Tech Stack:** Vite + React 19 (JSX, no runtime TS), CSS Modules, `lucide-react` for icons, `motion/react` (already present on the two inline surfaces — not touched here). No unit test runner in this repo; verification is browser-based (Browser pane, dev server `:3000`) plus a `npm run test:visual` guard.

## Global Constraints

- **Blast radius (CLAUDE.md):** change only what this plan specifies. No adjacent cleanup, refactor, or "improvement". No card/grid/layout change — mobile testimonials stay a vertical stack.
- **URL is single-source:** `GOOGLE_REVIEWS_URL` lives only in `src/data/siteMeta.js`. Never inline it; every render pulls it through the `GoogleReviewsLink` component.
- **Exact link URL:** `https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA` (known-good, already used on `/contacto`). Documented fallback if it fails validation: `https://search.google.com/local/reviews?placeid=ChIJ85kuJaTX2IgRXPrdsU0jNRs`.
- **Exact visible link text:** `Ver reseñas en Google` (Spanish — site copy language). Accessible name adds a visually-hidden ` (se abre en una pestaña nueva)`.
- **Exact eyebrow string everywhere:** `GOOGLE REVIEWS` (uppercase, no accents). Only `src/data/aboutPage.js` currently differs (`RESEÑAS DE GOOGLE`).
- **Link attributes:** `target="_blank"`, `rel="noopener noreferrer"`.
- **a11y (WCAG 2.1 AA):** min 44px tap target on the link; `:focus-visible` outline with offset; external-link affordance is an icon (`ArrowUpRight`), not colour alone; the 4-colour Google "G" is `aria-hidden`.
- **Mobile-first (MEMORY hard rule):** design and verify every surface at 375px first, then desktop.
- **Medical compliance:** the only new copy is `Ver reseñas en Google` — neutral, no claims. No review text is added or edited in this cycle.
- **No schema change:** do NOT add `Review` or `aggregateRating` JSON-LD (audit 8.18 policy risk). This plan is the outbound-link trust mechanism instead.
- **Google "G" stays 4-colour** in both tones (brand guidelines forbid recolouring).

---

## File Structure

**Create:**
- `src/components/shared/GoogleReviewsLink/GoogleReviewsLink.jsx` — the shared link component. One responsibility: render the outbound GBP-reviews link with correct a11y and tone.
- `src/components/shared/GoogleReviewsLink/GoogleReviewsLink.module.css` — its styles, including a local `.srOnly` utility (repo has no Tailwind `sr-only` in use — keep self-contained).

**Modify:**
- `src/data/siteMeta.js` — add `GOOGLE_REVIEWS_URL` export.
- `src/components/sections/Testimonials/Testimonials.jsx` — render `<GoogleReviewsLink tone="light" …/>` after the support paragraph (Home).
- `src/components/sections/Testimonials/Testimonials.module.css` — add `.reviewsLink { margin-top: 24px; }`.
- `src/components/templates/AboutPage/AboutPage.jsx` — render `<GoogleReviewsLink tone="light" …/>` after `testimonialSupport` (`/nosotros`).
- `src/components/templates/AboutPage/AboutPage.module.css` — add `.reviewsLink { margin-top: 24px; }`.
- `src/components/shared/TestimonialsSection/TestimonialsSection.jsx` — render `<GoogleReviewsLink tone="light" …/>` inside the header block (covers 6 hubs + 3 landings).
- `src/components/shared/TestimonialsSection/TestimonialsSection.module.css` — add `.reviewsLink { margin-top: 24px; }`.
- `src/components/layout/Footer/Footer.jsx` — render `<GoogleReviewsLink tone="dark" />` in the Contacto column's `<address>` (Column 4, NOT the social row in Column 1).
- `src/data/aboutPage.js` — `testimonialsHeader.eyebrow`: `'RESEÑAS DE GOOGLE'` → `'GOOGLE REVIEWS'`.
- `docs/SEO_AUDIT_2026.md` — 8.20 note: outbound-link half shipped.

**No test files** — repo has no unit runner. `tests/visual.spec.js` is used only as a guard (Task 6); its snapshots are all viewport-top or clipped sections and include neither the footer nor any testimonials block, so no baseline update is expected.

---

## Verification facts (confirmed 2026-08-31)

- `tests/visual.spec.js` has 11 tests. Every `toHaveScreenshot` is either `page` (viewport-only — no `fullPage`) at the top of a route, or a clipped `section[...]` (hero, founder, featured-services, "problem", "beforeAfter", "whatIs", "whoFor"). **None capture the testimonials section or the footer.** → `test:visual` is a guard here, not a baseline-update step.
- Known pre-existing visual failure: `Nosotros Page - Viewport` (`nosotros-viewport.png`, desktop-chrome) — `about/hero.jpg` placeholder, documented in `NEXT.md`. Unrelated to this work.
- `TestimonialsSection` is imported only by `src/components/templates/CategoryPage/CategoryPage.jsx` and `src/components/templates/LandingPage/LandingPage.jsx` — both render Google reviews. Rendering the link unconditionally inside it is safe.
- Dev server on `:3000` is already running (external process). Use the Browser pane against it.

---

## Task 1: Shared constant + `GoogleReviewsLink` component

**Files:**
- Modify: `src/data/siteMeta.js`
- Create: `src/components/shared/GoogleReviewsLink/GoogleReviewsLink.jsx`
- Create: `src/components/shared/GoogleReviewsLink/GoogleReviewsLink.module.css`

**Interfaces:**
- Produces:
  - `export const GOOGLE_REVIEWS_URL: string` in `src/data/siteMeta.js`.
  - Default export `GoogleReviewsLink({ tone = 'light', className })` — `tone: 'light' | 'dark'`, `className?: string`. Renders a single `<a>`.

- [ ] **Step 1: Add the constant**

In `src/data/siteMeta.js`, append after `MEDICAL_VALUATION_NOTICE`:

```js
// Canonical outbound link to the live Google Business Profile review panel.
// Single source — never inline. Trust signal for the on-page curated quotes,
// which carry NO aggregateRating / Review schema (audit 8.18). See
// docs/superpowers/specs/2026-08-31-google-reviews-outbound-link-design.md
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA';
```

- [ ] **Step 2: Validate the URL**

Open `https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA` in the Browser pane. Confirm it resolves to DERMA.M's Google listing (name "Derma.M" / "DERMA.M", West Palm Beach, review panel visible).
- If it resolves: leave the constant as-is.
- If it does NOT resolve cleanly: change the value to `https://search.google.com/local/reviews?placeid=ChIJ85kuJaTX2IgRXPrdsU0jNRs` and update the comment's first line to note the fallback is in use.

- [ ] **Step 3: Create the component**

`src/components/shared/GoogleReviewsLink/GoogleReviewsLink.jsx`:

```jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GOOGLE_REVIEWS_URL } from '../../../data/siteMeta';
import styles from './GoogleReviewsLink.module.css';

/**
 * Outbound link to DERMA.M's live Google Business Profile review panel.
 * Trust signal for the on-page curated testimonials (no aggregateRating schema).
 *
 * @param {{ tone?: 'light' | 'dark', className?: string }} props
 *   tone 'light' = dark text for #F2F0F1 / #EFEFEB section backgrounds;
 *   tone 'dark'  = muted link colour for the footer's dark background.
 */
export default function GoogleReviewsLink({ tone = 'light', className }) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${styles[tone]} ${className || ''}`}
    >
      <svg
        className={styles.glyph}
        viewBox="0 0 48 48"
        width="18"
        height="18"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
      <span className={styles.text}>Ver reseñas en Google</span>
      <span className={styles.srOnly}> (se abre en una pestaña nueva)</span>
      <ArrowUpRight className={styles.external} size={14} aria-hidden="true" />
    </a>
  );
}
```

- [ ] **Step 4: Create the stylesheet**

`src/components/shared/GoogleReviewsLink/GoogleReviewsLink.module.css`:

```css
.link {
  display: inline-flex;
  align-items: center;
  align-self: flex-start; /* don't stretch inside flex-column parents */
  gap: 8px;
  min-height: 44px;
  padding: 4px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: color 0.2s ease;
}

.glyph {
  flex-shrink: 0;
}

.external {
  flex-shrink: 0;
  opacity: 0.7;
}

.light {
  color: #363633;
}

.dark {
  color: #CCC9C1;
}

@media (hover: hover) {
  .link:hover .text {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  .dark:hover {
    color: #F2F0F1;
  }
}

.link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

.srOnly {
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

- [ ] **Step 5: Sanity-check the import path**

Confirm `src/components/shared/GoogleReviewsLink/GoogleReviewsLink.jsx` reaches `siteMeta.js` at `../../../data/siteMeta` (shared → components → src → data). Confirm `lucide-react` exports `ArrowUpRight`:

Run: `node -e "console.log(Object.keys(require('lucide-react')).includes('ArrowUpRight'))"`
Expected: `true`

- [ ] **Step 6: Commit**

```bash
git add src/data/siteMeta.js src/components/shared/GoogleReviewsLink/
git commit -m "feat(reviews): add GoogleReviewsLink component + GOOGLE_REVIEWS_URL constant"
```

---

## Task 2: Wire Home testimonials (`Testimonials.jsx`)

**Files:**
- Modify: `src/components/sections/Testimonials/Testimonials.jsx`
- Modify: `src/components/sections/Testimonials/Testimonials.module.css`

**Interfaces:**
- Consumes: `GoogleReviewsLink` (default export, `tone` + `className` props) from Task 1.

- [ ] **Step 1: Import the component**

In `src/components/sections/Testimonials/Testimonials.jsx`, add to the imports:

```jsx
import GoogleReviewsLink from '../../shared/GoogleReviewsLink/GoogleReviewsLink';
```

- [ ] **Step 2: Render it after the support paragraph**

Find:

```jsx
            <p className={styles.support}>
              Experiencias reales de personas que han confiado en Derma.M para cuidar su piel, su cuerpo y su bienestar.
            </p>
```

Immediately after that `</p>` (still inside the `motion.div` with `className={styles.headingBlock}`), add:

```jsx
            <GoogleReviewsLink tone="light" className={styles.reviewsLink} />
```

- [ ] **Step 3: Add the spacing class**

Append to `src/components/sections/Testimonials/Testimonials.module.css`:

```css
.reviewsLink {
  margin-top: 24px;
}
```

- [ ] **Step 4: Browser-verify at 375px (mobile first)**

Browser pane → resize to mobile (375×812) → `http://localhost:3000/` → scroll to "LO QUE DICEN NUESTROS CLIENTES".
Confirm:
- "Ver reseñas en Google" appears below the support paragraph, above the first card, left-aligned.
- 4-colour Google "G" on the left, "↗" on the right.
- Tap the link → opens the DERMA.M Google listing in a new tab.
- `read_page` shows the `<a>` with `rel="noopener noreferrer"` and accessible name `Ver reseñas en Google (se abre en una pestaña nueva)`.
- `javascript_tool`: the link's `getBoundingClientRect().height` is ≥ 44.
- Keyboard: Tab to the link → visible focus outline with offset.

- [ ] **Step 5: Browser-verify desktop**

Resize to desktop → reload `/` → same section. Confirm the link sits in the left heading column under the support text, cards unchanged (3-up), no layout shift.

- [ ] **Step 6: Check console**

`read_console_messages` (onlyErrors) → no new errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/Testimonials/
git commit -m "feat(reviews): outbound Google reviews link on Home testimonials"
```

---

## Task 3: Wire `/nosotros` (`AboutPage.jsx`) + unify eyebrow

**Files:**
- Modify: `src/components/templates/AboutPage/AboutPage.jsx`
- Modify: `src/components/templates/AboutPage/AboutPage.module.css`
- Modify: `src/data/aboutPage.js`

**Interfaces:**
- Consumes: `GoogleReviewsLink` from Task 1.

- [ ] **Step 1: Import the component**

In `src/components/templates/AboutPage/AboutPage.jsx`, add:

```jsx
import GoogleReviewsLink from '../../shared/GoogleReviewsLink/GoogleReviewsLink';
```

- [ ] **Step 2: Render it after the support paragraph**

Find:

```jsx
              <p className={styles.testimonialSupport}>{testimonialsHeader.body}</p>
```

Immediately after that line (still inside the `motion.div` with `className={styles.headingBlock}`), add:

```jsx
              <GoogleReviewsLink tone="light" className={styles.reviewsLink} />
```

- [ ] **Step 3: Add the spacing class**

Append to `src/components/templates/AboutPage/AboutPage.module.css`:

```css
.reviewsLink {
  margin-top: 24px;
}
```

- [ ] **Step 4: Unify the eyebrow string**

In `src/data/aboutPage.js`, in the `testimonialsHeader` object (around line 158), change:

```js
    eyebrow: "RESEÑAS DE GOOGLE",
```

to:

```js
    eyebrow: "GOOGLE REVIEWS",
```

- [ ] **Step 5: Browser-verify at 375px**

Browser pane → mobile 375 → `http://localhost:3000/nosotros` → scroll to the testimonials section.
Confirm:
- Eyebrow now reads `GOOGLE REVIEWS`.
- "Ver reseñas en Google" link below the support text, above the cards; "G" + "↗"; opens the DERMA.M listing in a new tab.
- `javascript_tool`: link height ≥ 44; Tab → visible focus outline.

- [ ] **Step 6: Browser-verify desktop**

Resize to desktop → reload `/nosotros` → link in the left heading column, cards unchanged.

- [ ] **Step 7: Console check**

`read_console_messages` (onlyErrors) → no new errors.

- [ ] **Step 8: Commit**

```bash
git add src/components/templates/AboutPage/ src/data/aboutPage.js
git commit -m "feat(reviews): Google reviews link on /nosotros + unify eyebrow to GOOGLE REVIEWS"
```

---

## Task 4: Wire `TestimonialsSection` (6 hubs + 3 landings)

**Files:**
- Modify: `src/components/shared/TestimonialsSection/TestimonialsSection.jsx`
- Modify: `src/components/shared/TestimonialsSection/TestimonialsSection.module.css`

**Interfaces:**
- Consumes: `GoogleReviewsLink` from Task 1.

- [ ] **Step 1: Import the component**

In `src/components/shared/TestimonialsSection/TestimonialsSection.jsx`, add:

```jsx
import GoogleReviewsLink from '../GoogleReviewsLink/GoogleReviewsLink';
```

- [ ] **Step 2: Render it inside the header block**

Find:

```jsx
      {(eyebrow || title || support) && (
        <div className={styles.header}>
          <SectionHeader 
            eyebrow={eyebrow} 
            title={title} 
            support={support} 
            variant={variant === 'dark' ? 'dark' : 'light'} 
            align="left"
            maxWidth="800px"
          />
        </div>
      )}
```

Change the inner `<div>` to also render the link after `<SectionHeader />`:

```jsx
      {(eyebrow || title || support) && (
        <div className={styles.header}>
          <SectionHeader 
            eyebrow={eyebrow} 
            title={title} 
            support={support} 
            variant={variant === 'dark' ? 'dark' : 'light'} 
            align="left"
            maxWidth="800px"
          />
          <GoogleReviewsLink
            tone={variant === 'dark' ? 'dark' : 'light'}
            className={styles.reviewsLink}
          />
        </div>
      )}
```

(Rationale for `tone` derived from `variant`: hubs/landings pass `variant="offWhite"` or default — both light backgrounds → `tone="light"`; only a `dark` variant would need `tone="dark"`. Mirrors the existing `SectionHeader` variant mapping one line above.)

- [ ] **Step 3: Add the spacing class**

Append to `src/components/shared/TestimonialsSection/TestimonialsSection.module.css`:

```css
.reviewsLink {
  margin-top: 24px;
}
```

- [ ] **Step 4: Browser-verify a hub at 375px**

Browser pane → mobile 375 → `http://localhost:3000/faciales` → scroll to the "GOOGLE REVIEWS" testimonials section.
Confirm: eyebrow `GOOGLE REVIEWS`; "Ver reseñas en Google" link under the support text, above the card stack; "G" + "↗"; opens the DERMA.M listing in a new tab; link height ≥ 44; Tab → visible focus outline. Cards still a single vertical column.

- [ ] **Step 5: Browser-verify a landing at 375px**

Same at `http://localhost:3000/limpieza-facial-profunda` → scroll to its testimonials section. Same checks.

- [ ] **Step 6: Browser-verify desktop**

Resize to desktop → reload `/faciales` and `/limpieza-facial-profunda` → link above the grid, grid unchanged (2/3-up), no shift.

- [ ] **Step 7: Console check**

`read_console_messages` (onlyErrors) on both routes → no new errors.

- [ ] **Step 8: Commit**

```bash
git add src/components/shared/TestimonialsSection/
git commit -m "feat(reviews): Google reviews link on hub + landing testimonials sections"
```

---

## Task 5: Wire the footer (Contacto column)

**Files:**
- Modify: `src/components/layout/Footer/Footer.jsx`

**Interfaces:**
- Consumes: `GoogleReviewsLink` from Task 1.

- [ ] **Step 1: Import the component**

In `src/components/layout/Footer/Footer.jsx`, add:

```jsx
import GoogleReviewsLink from '../../shared/GoogleReviewsLink/GoogleReviewsLink';
```

- [ ] **Step 2: Render it in the Contacto `<address>`**

Find the Contacto column's WhatsApp line:

```jsx
              <p className={styles.contactItem}>
                <a href={whatsappUrl} className={styles.link} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>
```

Immediately after that `</p>`, still inside `<address className={styles.addressBlock}>`, add:

```jsx
              <GoogleReviewsLink tone="dark" />
```

(The `<address>` is `display:flex; flex-direction:column; gap:16px` — the link participates in that gap; no wrapper `<p>` and no extra class needed.)

- [ ] **Step 3: Browser-verify at 375px**

Browser pane → mobile 375 → `http://localhost:3000/` → scroll to the footer → Contacto column.
Confirm:
- "Ver reseñas en Google" is the last item under WhatsApp, NOT among the Instagram/TikTok/Facebook icons (those are in the Brand column).
- 4-colour "G" is legible on the dark footer background; "↗" present.
- `javascript_tool`: computed `color` of the link resolves to `rgb(204, 201, 193)` (`#CCC9C1`) and contrast vs the footer background token is ≥ 4.5:1. If the "G" looks muddy on dark, note it but do not add a plate unless it fails legibility — report back for a judgment call.
- Link height ≥ 44; Tab → visible `2px solid` focus outline (currentColor) with 4px offset.
- Tap → opens the DERMA.M Google listing in a new tab.

- [ ] **Step 4: Browser-verify desktop**

Resize to desktop → reload `/` → footer Contacto column: link sits under WhatsApp, column spacing consistent with the other items, no reflow of adjacent columns.

- [ ] **Step 5: Console check**

`read_console_messages` (onlyErrors) → no new errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/Footer/Footer.jsx
git commit -m "feat(reviews): Google reviews link in footer Contacto column"
```

---

## Task 6: Full verification + audit doc note

**Files:**
- Modify: `docs/SEO_AUDIT_2026.md`

- [ ] **Step 1: Grep for accidental inlined URLs**

Run: `MSYS_NO_PATHCONV=1 git grep -n "maps.app.goo.gl\|search.google.com/local/reviews" -- src/`
Expected: matches only in `src/data/siteMeta.js` (the constant) and `src/pages/Contacto.jsx` (pre-existing, unrelated). No matches in any component from Tasks 2–5.

- [ ] **Step 2: Grep for stale eyebrow copy**

Run: `MSYS_NO_PATHCONV=1 git grep -n "RESEÑAS DE GOOGLE\|Reseñas de Google" -- src/`
Expected: no matches.

- [ ] **Step 3: `test:visual` guard**

Start a temp server on `:3003` and run the full suite (shared-component edit → run the gate even though snapshots exclude these regions):

```bash
npx vite --port 3003 --strictPort --host &
MSYS_NO_PATHCONV=1 npx playwright test tests/visual.spec.js
```

Expected: the only failure is the pre-existing `Nosotros Page - Viewport` (`nosotros-viewport.png`, desktop-chrome, `about/hero.jpg` placeholder — documented in `NEXT.md`). **No other diffs.** Do NOT run `--update-snapshots`. If any other test shows a diff, stop and investigate — the change was expected to be below every snapshot clip.

Stop the `:3003` server by PID when done (never `taskkill //IM node.exe`).

- [ ] **Step 4: `faq-consistency` guard (shared template touched)**

```bash
MSYS_NO_PATHCONV=1 npx playwright test tests/faq-consistency.spec.js
```
(Reuse the `:3003` server, or restart it.) Expected: 12/12 pass (unchanged by this work).

- [ ] **Step 5: a11y sweep**

On `/`, `/nosotros`, `/faciales`, and the footer (mobile + desktop), confirm for each rendered link:
- accessible name = `Ver reseñas en Google (se abre en una pestaña nueva)` (`read_page`).
- `rel="noopener noreferrer"`, `target="_blank"`.
- height ≥ 44px; visible `:focus-visible` outline.
- `light` tone: text `#363633` on `#F2F0F1` / `#EFEFEB`. `dark` tone: `#CCC9C1` on footer bg. Both ≥ 4.5:1 (`javascript_tool` + a contrast check).

- [ ] **Step 6: Update the audit doc**

In `docs/SEO_AUDIT_2026.md`, at item 8.20, add a dated line:

```
- 2026-08-31: Part 1 (outbound link) shipped — shared `GoogleReviewsLink` → GBP
  review panel on Home, /nosotros, 6 hubs, 3 landings + footer; single
  `GOOGLE_REVIEWS_URL` constant; NO aggregateRating (8.18 stays). Parts 2
  (per-page topical curation) and 3 (aggregateRating decision) remain backlog.
```

(If 8.20 has a status field, set it to reflect "Part 1 done, Parts 2–3 backlog" in the doc's own style. Match surrounding formatting.)

- [ ] **Step 7: Commit**

```bash
git add docs/SEO_AUDIT_2026.md
git commit -m "docs(seo-audit): 8.20 Part 1 outbound Google reviews link shipped"
```

- [ ] **Step 8: Screenshot proof**

Browser pane, mobile 375 + desktop: screenshot the Home testimonials section and the footer Contacto column with the link visible. Share with the user.

- [ ] **Step 9: Hand off to close-cycle**

Report completion. The docs ritual (`PROGRESS.md`, `DECISIONS.md` — why: outbound link as the trust mechanism vs `aggregateRating`, and footer placement in Contacto not the social row; `NEXT.md`; clean tree; commit; push on confirmation) runs via the `close-cycle` skill after the user approves the change.

---

## Self-Review

**1. Spec coverage:**
- Shared constant `GOOGLE_REVIEWS_URL` + validation → Task 1 (Steps 1–2). ✓
- `GoogleReviewsLink` component (tone, 44px, focus, rel, sr-only new-tab, ArrowUpRight, 4-colour G aria-hidden) → Task 1 (Steps 3–4). ✓
- Footer Contacto column placement, `tone="dark"` → Task 5. ✓
- Home placement, `tone="light"` → Task 2. ✓
- `/nosotros` placement → Task 3. ✓
- 6 hubs + 3 landings via `TestimonialsSection` → Task 4. ✓
- Eyebrow unification (`aboutPage.js` only) → Task 3 Step 4; verified no stragglers → Task 6 Step 2. ✓
- No layout/grid change; mobile stays vertical → enforced by "render after support/WhatsApp, no card edits"; verified Tasks 2–5 desktop/mobile steps. ✓
- Browser verification 375 first → every wiring task. ✓
- `test:visual` handling (guard, no baseline update, pre-existing failure noted) → Task 6 Step 3. ✓
- WCAG AA → Task 6 Step 5. ✓
- Medical compliance (neutral copy, no review text change) → Global Constraints; nothing in tasks adds claims. ✓
- No `Review` / `aggregateRating` schema → Global Constraints; no task touches schema files. ✓
- `SEO_AUDIT_2026.md` 8.20 note → Task 6 Step 6. ✓
- Docs ritual via `close-cycle` → Task 6 Step 9. ✓

**2. Placeholder scan:** No TBD/TODO. The one conditional ("if the G looks muddy on dark… report back") is a bounded judgment call with a defined default (no plate) and an explicit report step, not an open-ended instruction. Contrast targets, class names, file paths, and copy strings are all literal.

**3. Type consistency:** `GoogleReviewsLink` is imported as a default export in all five call sites with matching relative paths (`../../shared/…` from `sections/` and `templates/*/`, `../GoogleReviewsLink/…` from `shared/TestimonialsSection/`, `../../shared/…` from `layout/Footer/`). Prop shape `{ tone, className }` used consistently; `tone` values limited to `'light'`/`'dark'` matching the CSS module class names `.light`/`.dark`. `GOOGLE_REVIEWS_URL` named identically in the constant and the component import. `.reviewsLink` class added to exactly the three CSS modules whose JSX references it (Home, AboutPage, TestimonialsSection); the footer intentionally uses no class.
