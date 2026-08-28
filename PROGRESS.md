# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 2b: podar footprint de fundadora en `/nosotros`
- Review en vivo del Ciclo 2: seguía recargado y con **dos** bloques de fundadora (Spotlight + sección "enfoque" con su cita). Steer del usuario: `/nosotros` = **el equipo y cómo trabaja**; todo lo de Nancy-persona va a `/nancy-nieto`.
- **Founder Spotlight → mínima:** foto + `FUNDADORA Y DIRECTORA` + `NANCY NIETO` + línea de credenciales + **una** frase de origen ("DERMA.M nació de su visión de una estética responsable, cercana y guiada por la formación continua.") + `Conoce más sobre Nancy →`. Se quitan el párrafo de visión, la línea "Para Nancy…" y la mención de Academy (data + JSX).
- **Sección enfoque → banda corta:** eyebrow `CÓMO TRABAJAMOS`, heading `TRES PASOS EN CADA PLAN DE CUIDADO`, solo los 3 pilares (`BenefitColumns variant="dark"`). Se quitan `body`, `supportingText` y el `<blockquote>` de Nancy.
- `founderBioPage.founderPhilosophy` pasó a objeto inline (puente `ESCUCHAR ANTES DE RECOMENDAR` hasta que el Ciclo 3 reescriba el export). **Academy: sin mención en `/nosotros` en el interín** (decisión del usuario, opción 1) — aparece solo en `/nancy-nieto` en el Ciclo 3.
- `test:visual` 34/34 (solo baseline `nosotros-founder-with-link-mobile-safari` regenerado). Commit `ad2be76`.
- Orden final `/nosotros`: Hero → Founder Spotlight (mínima) → Cómo trabajamos (3 pasos) → Equipo → Testimonios → FinalCTA.
- **Pendiente:** Ciclo 3 (`/nancy-nieto` — `founderBioPage` standalone; absorbe visión + `ESCUCHAR ANTES DE RECOMENDAR` + cita corta (que se descarta a favor de la larga) + secciones Historia/Formación y DERMA.M & Academy con misión/visión completa, con el texto real que pasó la clínica).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
