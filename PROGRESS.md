# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /nosotros/nancy-nieto: hero enfocado en ella + imagen propia

- **Imagen (`feat`, `bd43ced`).** `founderBioPage.hero.backgroundImage`: `about/hero.jpg` (modelo stock, compartida con /nosotros) → `about/nancy-nieto/nancy-nieto-hero.jpg` (Nancy, 1920×1080, 56 KB) + `.webp`. `about/hero.jpg` sigue vivo en el hero de /nosotros.
- **Copy + CTAs + animación (`feat`, `c7df424`).** `hero.body` → frase corta de Nancy ("Mi mayor satisfacción es saber que puedo servir, escuchar y acompañar a cada persona en su proceso.") en vez del párrafo largo de historia. Se quitan `primaryCta`/`secondaryCta` del hero del bio (protagonismo a ella; el FAB de WhatsApp queda como acción persistente). `PageHero`: el texto anima recién cuando `mediaReady` + `delay 0.35s` → primero pinta la imagen, después entra el texto (aplica a todos los heroes; sin diff en `test:visual` por el wait de 3s).
- **Eyebrow → attribution (`feat`, este commit).** `PageHero`: guard `{eyebrow && …}` (antes el `<div>` se renderizaba aunque el string fuera vacío) + nueva prop `attribution` que se pinta **debajo del body** (`.attribution`, 13px, weight 600, blanco). El hero de Nancy deja de usar `eyebrow` y pasa `attribution: "FUNDADORA Y DIRECTORA DE DERMA.M"` → queda como firma bajo la cita. Nancy-only; los demás heroes no pasan `attribution` y no cambian.
- **Verificación.** `:3000` mobile + desktop: orden H1 → cita → firma, sin CTAs, imagen de Nancy detrás, consola limpia. `test:visual` 34/34 (el snapshot `nancy-nieto-viewport` no reaccionó a los cambios de texto del hero — posible gap de cobertura pre-existente, no bloquea).
- **Mapa de imágenes de Nancy: 2/4** (Home + bio hero). Faltan: `/nosotros` `founderSpotlight.image`, retrato del bio + schema.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
