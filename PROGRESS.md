# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Skill `add-media` (proceso para agregar imágenes/videos)
- **Nueva skill project-local `add-media`** en `.agents/skills/add-media/SKILL.md` + copia sincronizada en `.claude/skills/add-media/SKILL.md`. SKILL.md en inglés (doc de tooling).
- Define 3 procedimientos: **Acción A** rellenar slot existente (ruta en `src/data/*.js` sin archivo en disco), **Acción B** slot de media nuevo (gate de brainstorming previo), **Acción C** video de fondo de hero. Envuelve `assets-optimizer` (llama sus scripts), no lo reemplaza.
- Checklist DoD compartido: subdir correcto, optimizado (<200KB img / <3MB video / `-an`), `.webp` hermano, filename SEO español kebab (7.1), alt español trazable (7.2 + `feedback_no_inventar_contenido`), render en `:3000` sin fallback `og-default`, `test:visual` limpio, WCAG AA, ritual de docs.
- Handoff de archivos crudos: `scratchpad/media-in/`. Faltantes conocidos listados (8 slots de `/nosotros`).
- Spec: `docs/superpowers/specs/2026-08-29-add-media-skill-design.md`. **Sin cambios de código de sitio.**

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
