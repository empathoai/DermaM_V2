# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Legal-pages overhaul (cont. 39, code)

- **Delete `/notice-of-privacy-practices`:** removed `src/pages/NoticePrivacyPractices.jsx` + its `routes.jsx` import/route; added a client-side `<Navigate replace>` from that path → `/politica-de-privacidad` (the real 301 goes in `.htaccess` at deploy; without the Navigate an unmatched route renders blank — no `path="*"` in this app). Privacy §6 already carries the honest health-records statement (Fla. Stat. § 456.057 + conditional HIPAA), so nothing was absorbed.
- **`legalPages.js`:** deleted the unused `contactConsentCopy` export (zombie from the removed contact form); dropped `formulario`/`form`/`chat` references in Privacy §1 (ES+EN), §3 notice (ES+EN), Terms §3 (ES+EN) — rewritten for the real WhatsApp/Square/email flow. **Privacy §7 rewritten to disclose Google Analytics 4** (`G-9272VHFT03`, aggregate use, no advertising, opt-out link) — the prior "no first-party analytics" claim was false (`index.html` loads GA4).
- **`TreatmentDisclaimer.jsx`:** `PRP` → `PRF`, `microagujoneamiento` → `microneedling` (§4); emergency § (ES+EN) "plataforma digital / formularios / chat en línea" → "sitio web, WhatsApp y email" (no chat or forms exist); meta "centro dermatológico" → "medical spa"; NAP label "Atención Clínica" → "Ubicación"; §9 heading "Consultas Clínicas" → "Consultas sobre Tratamientos"; removed the `attorneyReviewRequired`/`attorneyCalloutText` props (internal comment left).
- **`Accessibility.jsx`:** removed the attorney-callout props (comment left); §1 "contenidos dermatológicos" → "contenidos de cuidado de la piel".
- **`Footer.jsx`:** column heading "Aviso Clínico" → "Aviso Importante". **`LegalResources.jsx`:** disclosure headings "Aviso Clínico General" / "Clinical Disclosure" → "Aviso General" / "General Disclaimer"; Terms card "envío de formularios" → "las reservas"; intro paragraph `usted` → `tú` and "páginas asistenciales" → "páginas de servicios".
- **Why:** user scope-expansion off Task 15 — align the legal surface with reality (no form, GA4 live, med spa ≠ clínica) and hide unreviewed-legal callouts. One cycle, "todo junto". Spec: `docs/superpowers/specs/2026-08-31-legal-pages-overhaul-design.md`; plan `2026-08-31-legal-pages-overhaul.md`. See `DECISIONS.md` 2026-08-31 (×2).
- **Verified:** browser `:3000` 375px + desktop — Privacy/Terms/Disclaimer/Accessibility/`/legal` read in full; `/notice-of-privacy-practices` redirects; §7 shows GA4 + opt-out. `git grep` sweeps (notice-of-privacy, contactConsentCopy, centro dermatológico, chat en línea, formulario in legalPages, attorneyReviewRequired={true}, asistenciales, dermatológicos) = 0. `npm run test:visual` — 21 passed, only the standing unrelated `nosotros-viewport` (desktop) failure (`about/hero.jpg` placeholder); no legal-page or footer-only snapshot exists, nothing to update. `MEDICAL_COMPLIANCE.md` — no banned word, mandatory notice literal absent from these files, legal sense unchanged, `tú` preserved.
- Adjectival medical terms deliberately kept (accurate, not institutional): "nota clínica", "cribado clínico", "clínicamente evaluados", "empleado clínico" in `TreatmentDisclaimer`.
- Commit `34ab2a4`.
- **Deploy checklist additions:** `.htaccess` 301 `/notice-of-privacy-practices` → `/politica-de-privacidad`; drop the 7× `Disallow: /notice-of-privacy-practices` from `public/robots.txt`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
