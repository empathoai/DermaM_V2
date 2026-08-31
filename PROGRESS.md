# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 14: consolidate treatment JSON-LD into one `@graph` (cont. 37, code)

- **`FAQAccordion.jsx`:** new `emitSchema = true` prop; the `<Helmet>` emitting the standalone `FAQPage` `<script>` is now `{emitSchema && (…)}`. `LandingPage` / `Contacto` don't pass the prop → their FAQ schema is unchanged.
- **`TreatmentSEO.jsx`:** `BreadcrumbList` node gains `@id: {url}#breadcrumb`; a `FAQPage` node (`@id {url}#faq`, `inLanguage: es`, `about → {url}#service`, `mainEntity` from `data.faq`) is pushed into the existing `@graph` when `data.faq` is a non-empty array. JSDoc updated.
- **`TreatmentDetailPage.jsx`:** `<FAQAccordion emitSchema={false} … />`.
- **Why:** SEO-07. Treatment routes emitted two separate `ld+json` `<script>`s (Service+Breadcrumb from `TreatmentSEO`, FAQPage from `FAQAccordion`) — `react-helmet-async` can merge/drop sibling scripts without unique keys → rich-results risk; and the FAQ was unlinked from the Service. One connected `@graph` fixes both. Enfoque A (opt-out prop), no shared helper (YAGNI). See `DECISIONS.md` 2026-08-31. Spec: `docs/superpowers/specs/2026-08-31-treatment-jsonld-graph-seo-07-design.md`.
- **Verified:** browser `:3000` — 5 treatment routes (one per category): exactly 1 `ld+json`, `@graph` = `[Service, BreadcrumbList, MedicalWebPage, FAQPage]`, `FAQPage.about['@id']` === `Service['@id']`, breadcrumb has `@id`, no standalone `FAQPage`. `/limpieza-facial-profunda`, `/contacto`, `/prf-y-fibrina`, `/tratamientos-postoperatorios`: their `FAQPage` still present. FAQ accordion renders/works; no React warnings. **`test:visual` skipped** — schema-only in `<head>`, `FAQAccordion`'s rendered markup is byte-identical (per `CLAUDE.md` §DoD). No new copy → MEDICAL_COMPLIANCE n/a. Google Rich Results Test = manual at deploy.
- Closes audit Task 14 (SEO-07). Commit `2b89dd3`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
