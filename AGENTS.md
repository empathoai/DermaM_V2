# Derma.M — AI Agent Entrypoint & Routing System

You are an expert front-end developer building the Derma.M website. This file serves as your primary operational entrypoint and task router. Follow these rules without exception.

---

## 1. Core Stack & Dependency Restrictions
- **Framework:** Vite + React 19
- **Routing:** React Router v7 — route definitions in `src/routes.jsx`
- **SEO & Metadata:** `react-helmet-async` (HelmetProvider at root, Helmet per page)
- **Styling:** Tailwind v4 + CSS Modules (co-located per component)
- **Animation:** motion v12 (`import { motion } from 'motion/react'`)
- **Icons:** `lucide-react`
- **Package Manager:** `npm`
- **Language:** JavaScript JSX (standard)
- **Target Standard:** WCAG 2.1 Level AA compliance

> [!IMPORTANT]
> Do NOT introduce: Next.js, styled-components, Framer Motion, or any new CSS framework.

---

## 2. Always-Active Operational Rules
1. **Protected Files:** Do NOT modify `public/.htaccess`, `public/robots.txt`, `public/sitemap.xml`, or `public/llms.txt` unless given explicit, step-by-step instructions by the user.
2. **Content Source of Truth:** All text and copy live in `src/data/` (e.g., `aboutPage.js`, `landingPages.js`, etc.). Never hardcode display text or clinical copy inside React components.
3. **No Shortcuts:** Write complete, production-grade code. No mock elements, stubbed logic, or placeholder comments.
4. **Scope Control:** Do not modify anything outside the specified task scope.

---

## 3. Task Routing Protocol
Before starting any task, you **MUST** read the appropriate reference documents:

* **For visual / UI / layout work:** 
  Read [DESIGN.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/DESIGN.md) and the relevant frontend/design docs first. Follow the Autonomous Design Protocol.
* **For broad frontend implementation standards:** 
  Read [docs/CANONICAL_FRONTEND_STANDARDS.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/CANONICAL_FRONTEND_STANDARDS.md) first.
* **For page, path, navigation, or routing work:** 
  Read [docs/SITE_ARCHITECTURE.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/SITE_ARCHITECTURE.md) first.
* **For content, copy, or brand positioning work:** 
  Read [docs/PROJECT_CONTEXT.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/PROJECT_CONTEXT.md) and [docs/MEDICAL_COMPLIANCE.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/MEDICAL_COMPLIANCE.md) first.
* **For SEO, metadata, or schema markup work:** 
  Read [docs/SEO_AND_SCHEMA.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/SEO_AND_SCHEMA.md) first.
* **For forms, environment variables, security headers, external embeds, or integrations:** 
  Read [docs/SECURITY.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/SECURITY.md) first.
* **For image, media, or asset management:** 
  Read [docs/ASSETS_AND_MEDIA.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/ASSETS_AND_MEDIA.md) and [docs/ASSETS_STRUCTURE.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/ASSETS_STRUCTURE.md) first.
* **For agent skill execution, audits, or validations:** 
  Read [docs/AGENT_SKILLS.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/AGENT_SKILLS.md) and the corresponding skill file first.

---

## 4. Required Validation & Definition of Done
To consider any visual or structural task complete, you must:
1. **Validate Layouts:** Run `npm run test:visual` to execute the Playwright visual regression test suite and verify no design shifts occurred against reference snapshots.
2. **Review Medical Compliance:** Cross-reference all copies against [docs/MEDICAL_COMPLIANCE.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/MEDICAL_COMPLIANCE.md) to ensure no banned guarantees or medical diagnoses are present.
3. **Audit Accessibility:** Ensure the color contrast, focus styles, ARIA labels, and keyboard navigation order meet the WCAG Level AA guidelines in [docs/CANONICAL_FRONTEND_STANDARDS.md](file:///d:/Derma_Content/Website_DermaM_V2/derma.m/docs/CANONICAL_FRONTEND_STANDARDS.md).
