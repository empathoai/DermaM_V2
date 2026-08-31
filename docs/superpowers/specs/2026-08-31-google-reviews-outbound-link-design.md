# Google Reviews outbound link + eyebrow unification — design

**Date:** 2026-08-31
**Status:** approved by user 2026-08-31 — ready for `writing-plans`
**Type:** trust / UX — outbound link to the live Google Business Profile from every reviews surface
**Cycle:** one cycle (L). Supersedes and executes **Part 1** of
`docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md`
(the outbound-link half). Part 2 (per-page topical curation) and Part 3
(`aggregateRating` decision) of that spec are untouched and stay in backlog.

## What the user decided (2026-08-31)

1. **Item 1 — approved.** Add a "Ver reseñas en Google" link in the footer, in the
   **Contacto** column (NOT in the Instagram/TikTok/Facebook social row — GBP is not
   a social network and the 4-colour Google "G" breaks that monochrome icon set).
2. **Item 2 — scope = ALL reviews surfaces.** Home, `/nosotros`, the 6 category hubs,
   and the 3 landings. A "Ver reseñas en Google →" line under the support paragraph
   of each testimonials block.
3. **Item 3 — keep the vertical stack on mobile.** No layout change. With only 3
   reviews a horizontal carousel hides 2 of 3 behind a gesture and hurts
   discoverability / SEO / a11y. A slider is only justified past ~5–6 reviews.
4. **Unify the eyebrow copy to `GOOGLE REVIEWS`** everywhere. Only
   `src/data/aboutPage.js:158` currently differs (`RESEÑAS DE GOOGLE`).

Out of the original 3 ideas, "Google logo in the social row" was rejected in
favour of Item 1 Option A (Contacto column).

## Current state (verified 2026-08-31)

- **No `Review` / `aggregateRating` JSON-LD anywhere.** `aggregateRating 4.9/117`
  was removed 2026-08-27 (audit 8.18) as a Google review-snippet policy risk. This
  spec does **not** reintroduce it.
- Curated static quotes render on:
  - **Home** — `src/components/sections/Testimonials/Testimonials.jsx`, eyebrow
    hardcoded `GOOGLE REVIEWS`. Cards: `.cardsArea` is `flex-direction: column`
    `<768px`, 2-col grid `>=768`, 3-col `>=1024`. 3 cards from
    `src/data/aboutPage.js` `testimonials`.
  - **/nosotros** — `src/components/templates/AboutPage/AboutPage.jsx`, its own
    inline markup (`styles.testimonialEyebrow` / `styles.testimonialSupport` /
    `styles.cardsArea`), eyebrow from `aboutPage.js` `testimonialsHeader.eyebrow`
    = `RESEÑAS DE GOOGLE`. Same 3 quotes as Home.
  - **6 hubs + 3 landings** — shared
    `src/components/shared/TestimonialsSection/TestimonialsSection.jsx`, which
    renders `src/components/shared/SectionHeader/SectionHeader.jsx` for the
    eyebrow/title/support, then a `.grid` of cards. `eyebrow` comes from
    `categoryPages.js` / `landingPages.js` — every occurrence already reads
    `GOOGLE REVIEWS`. Rendered from `CategoryPage.jsx:214` and
    `LandingPage.jsx:196`.
  - `TestimonialsSection` is imported **only** by `CategoryPage.jsx` and
    `LandingPage.jsx` (confirmed by grep) — both for Google reviews. Safe to
    render the link unconditionally inside it.
- GBP audited 2026-08-28: real **4.9 ★ / ~130 reviews**, NAP 100% consistent with
  `organizationSchema.js`. Place ID `ChIJ85kuJaTX2IgRXPrdsU0jNRs`
  (`organizationSchema.js:21`). `/contacto` already links to
  `https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA` (known-good short link).
- `src/data/siteMeta.js` already holds `HERO_LOCAL_TAG` and
  `MEDICAL_VALUATION_NOTICE` as shared single-source constants — same pattern for
  the new URL.

## Design

### 1. Shared constant

`src/data/siteMeta.js` — add:

```js
// Canonical outbound link to the live Google Business Profile review panel.
// Single source — never inline. Trust signal for the on-page curated quotes,
// which carry NO aggregateRating schema (audit 8.18). See
// docs/superpowers/specs/2026-08-31-google-reviews-outbound-link-design.md
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/Hgy4FgMVrEJoFWZWA';
```

**Validation step (in the plan, before wiring):** open `GOOGLE_REVIEWS_URL`,
confirm it resolves to DERMA.M's Google listing / review panel. If it does not
resolve cleanly, the fallback is
`https://search.google.com/local/reviews?placeid=ChIJ85kuJaTX2IgRXPrdsU0jNRs`;
document whichever is used in the constant's comment.

### 2. Shared component — `GoogleReviewsLink`

New: `src/components/shared/GoogleReviewsLink/GoogleReviewsLink.jsx` +
`GoogleReviewsLink.module.css`.

**Renders** a single `<a>`:

- `href={GOOGLE_REVIEWS_URL}`, `target="_blank"`, `rel="noopener noreferrer"`.
- Content, in order: the official Google "G" mark (inline SVG, 4-colour, ~18px,
  `aria-hidden="true"`) · visible text `Ver reseñas en Google` · a trailing
  `ArrowUpRight` icon from `lucide-react` (`aria-hidden="true"`, ~14px) as the
  external-link affordance (not colour-only).
- Visually-hidden suffix for AT: `(se abre en una pestaña nueva)` via an
  `srOnly` span, so the accessible name is
  "Ver reseñas en Google (se abre en una pestaña nueva)".

**Props:**

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `tone` | `'light' \| 'dark'` | `'light'` | `light` = dark text for `#F2F0F1`/`#EFEFEB` section backgrounds; `dark` = the footer's muted link colour on its dark background |
| `className` | `string` | — | optional extra class for spacing at the call site |

**CSS (`GoogleReviewsLink.module.css`):**

- `.link` — `display: inline-flex; align-items: center; gap: 8px;`
  `font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500;`
  `letter-spacing: 0.05em;` `min-height: 44px;` (tap target) `padding: 4px 0;`
  `text-decoration: none;`
- `.light` — `color: var(--color-stone, #363633);` hover → underline.
- `.dark` — `color: #BBB8B5;` hover → `color: #F2F0F1;` (matches
  `Footer.module.css` link behaviour).
- `:focus-visible` — `outline: 2px solid currentColor; outline-offset: 4px;`
  (site focus pattern; footer uses `outline-[#F2F0F1]`, sections use stone —
  `currentColor` covers both via `tone`).
- `.srOnly` — standard visually-hidden utility (position:absolute; 1px; clip).
- The 4-colour "G" keeps its brand colours in both tones (Google brand
  guidelines forbid recolouring). On the footer's dark background the standard
  multi-colour G at ~18px is legible; no plate needed. Verify in-browser.
- `prefers-reduced-motion`: no animation is added, nothing to gate.

**Isolation:** one purpose (link to the GBP review panel), one interface
(`tone` + optional `className`), one dependency (`GOOGLE_REVIEWS_URL`,
`lucide-react`). Consumers cannot see its internals; markup/a11y/URL change in
one place.

### 3. Placements

| # | Surface | File | Insertion point | Prop |
|---|---|---|---|---|
| 1 | Footer | `src/components/layout/Footer/Footer.jsx` | inside the Contacto `<address className={styles.addressBlock}>`, as the last `<p className={styles.contactItem}>` after the WhatsApp line | `tone="dark"` |
| 2 | Home | `src/components/sections/Testimonials/Testimonials.jsx` | immediately after `<p className={styles.support}>…</p>`, still inside `.headingBlock` | `tone="light"` |
| 3 | /nosotros | `src/components/templates/AboutPage/AboutPage.jsx` | immediately after `<p className={styles.testimonialSupport}>…</p>`, still inside `.headingBlock` | `tone="light"` |
| 4 | 6 hubs + 3 landings | `src/components/shared/TestimonialsSection/TestimonialsSection.jsx` | inside the existing `{(eyebrow \|\| title \|\| support) && (<div className={styles.header}>…)}` block, right after `<SectionHeader … />`; if that block renders only when a header exists, also render the link there — every consumer passes an eyebrow, so no separate guard needed | `tone="light"` |

- Each call site adds a small top margin via `className` or a local wrapper
  class (`~16–24px`) so the link is clearly separated from the support text and
  from the cards. Match the rhythm of the surrounding block (Home/Nosotros use a
  `.headingBlock` column; hubs/landings use `.header`).
- **No layout/grid change anywhere.** Cards stay as they are; the link is one
  new flow item in an already-vertical container.

### 4. Eyebrow unification

`src/data/aboutPage.js` line ~158 — `testimonialsHeader.eyebrow`:
`'RESEÑAS DE GOOGLE'` → `'GOOGLE REVIEWS'`. No other file needs it (all
`categoryPages.js` / `landingPages.js` occurrences already read `GOOGLE REVIEWS`;
Home is hardcoded `GOOGLE REVIEWS`).

## Accessibility (WCAG 2.1 AA)

- Discernible link text ("Ver reseñas en Google") + visually-hidden
  new-tab notice; external-link affordance is an icon, not colour.
- `min-height: 44px` on the link → touch target.
- `:focus-visible` outline, `outline-offset`, `currentColor` so it contrasts in
  both tones.
- Contrast: `light` `#363633` on `#F2F0F1`/`#EFEFEB` ≈ 10:1 ✓ · `dark` `#BBB8B5`
  on the footer background ✓ (same as existing footer links). Verify the dark
  value in-browser against the actual footer bg token.
- The multi-colour "G" is decorative (`aria-hidden`); the link works without it.
- Keyboard order: the link falls naturally after the support paragraph / after
  the WhatsApp line — no `tabindex`.

## Medical compliance

- New copy is "Ver reseñas en Google" only — no treatment claims, no outcomes,
  no banned words. `docs/MEDICAL_COMPLIANCE.md` review is trivially clear.
- No review text is added or changed in this cycle (that is Part 2 of the 8.20
  spec, still backlog).

## SEO / GEO / AEO impact

| Vector | Effect |
|---|---|
| Review rich snippets | Unchanged — none today, none after. Deliberately stays clear of the 8.18 `aggregateRating` policy risk. |
| Trust / entity signal | Mild positive — a followed outbound link from every reviews surface to the real GBP review panel corroborates both the on-page curated quotes and the business entity / NAP. |
| AEO (LLM answers) | Mild positive — an explicit, verifiable path to the unfiltered review source is a trust signal assistants weigh when summarising the business. |
| Topical relevance | Nil in this cycle — quote curation is Part 2 of the 8.20 spec, not here. |
| Ranking | No direct lever. Trust + UX + policy-safety only. |
| Consistency | Minor positive — one eyebrow string sitewide. |

## Definition of done

- [ ] `GOOGLE_REVIEWS_URL` in `src/data/siteMeta.js`; opened and confirmed to
      resolve to DERMA.M's Google review panel (or documented fallback in use).
- [ ] `GoogleReviewsLink` component + CSS module created; `tone` `light`/`dark`;
      44px target; `:focus-visible`; `rel="noopener noreferrer"`; visually-hidden
      new-tab notice; `ArrowUpRight` external affordance.
- [ ] Rendered on: Footer (Contacto column), Home `Testimonials.jsx`, `/nosotros`
      `AboutPage.jsx`, and `TestimonialsSection.jsx` (→ 6 hubs + 3 landings). URL
      never inlined — every render pulls the shared constant via the component.
- [ ] `aboutPage.js` testimonial eyebrow → `GOOGLE REVIEWS`.
- [ ] No grid / card / layout change; mobile testimonials stay a vertical stack.
- [ ] Browser verification **at 375px first**, then desktop, on Home, `/nosotros`,
      one hub, one landing, and the footer: link visible, tap target ≥44px,
      focus ring visible, opens the correct GBP listing in a new tab, external
      icon present.
- [ ] `npm run test:visual` — Footer appears in every snapshot; Home, `/nosotros`,
      and the 3 landing baselines change. Review each diff as intended, then
      `--update-snapshots`, re-run clean. (Hubs are not in the baseline set.)
- [ ] `docs/MEDICAL_COMPLIANCE.md` cross-check (trivial — one neutral CTA string).
- [ ] WCAG 2.1 AA: contrast in both tones, focus, target size, keyboard order.
- [ ] `docs/SEO_AUDIT_2026.md` 8.20 note updated to record that the outbound-link
      half (Part 1) is shipped; Parts 2–3 remain backlog.
- [ ] Docs ritual via `close-cycle`: `PROGRESS.md`, `DECISIONS.md` (why: outbound
      link as the trust mechanism instead of `aggregateRating`; footer placement
      in Contacto not the social row), `NEXT.md`; clean tree; commit; push on
      confirmation.

## Out of scope

- `aggregateRating` / `Review` JSON-LD (needs clinic sign-off on unfiltered
  reviews — separate cycle; see 8.20 spec Part 3).
- Per-page topical curation of the quotes (8.20 spec Part 2, Option A/B — backlog).
- Any live Google / Apify integration (explicitly dropped in the 8.20 spec).
- Per-review star ratings (stay hardcoded 5★ in the card UI, `aria-hidden`, as
  today — product decision cont. 42).
- The "4.9 ★ · +130 reseñas" context line the critique suggested — not approved;
  would be a factual-claim call for a later cycle.
- Adding the link to any surface that is not a testimonials block.
