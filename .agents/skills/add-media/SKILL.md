---
name: add-media
description: End-to-end procedure for adding or replacing an image or video in the DERMA.M site so it renders, is optimized, SEO-named, accessible, and passes visual regression. Wraps assets-optimizer. Use when the user wants to fill a missing media slot, add media to a section, or swap a hero background video.
---

# add-media

Place image/video assets into the DERMA.M site correctly. This skill defines the
**process**; it calls `assets-optimizer` for the optimize step, it does not replace it.

Design doc: `docs/superpowers/specs/2026-08-29-add-media-skill-design.md`.

## When to use

- A path in `src/data/*.js` points to a file that is not on disk (fill a slot) — **Acción A**.
- The user wants media in a section that currently has none (new slot) — **Acción B**.
- The user wants to add or replace a hero background video — **Acción C**.

## Media system (facts)

- All media lives in `public/assets/images/**` by page type: `about/`, `contact/`,
  `global/`, `home/`, `hubs/<cat>/`, `landings/<slug>/`, `treatments/<cat>/<slug>/`.
- Referenced only by absolute path string in `src/data/*.js`. Never hardcode media in components.
- Every `.jpg` needs a sibling `.webp`. `Picture.jsx` serves `.webp` via `<source>`,
  falls back to the `.jpg`. Batch-create siblings with
  `node .agents/skills/assets-optimizer/scripts/generate-webp.js`.
- Video: `.mp4`, `muted` + `autoPlay` + `playsInline`. `HeroMedia.jsx` derives the
  poster as `src.replace('.mp4', '.jpg')` — a sibling `.jpg` of the same basename is required.
- Image load failure in `HeroMedia.jsx` falls back to `/assets/images/global/og-default.jpg`.
  Seeing that image on the page = the real asset 404'd.
- `assets-optimizer` scripts:
  - `node .agents/skills/assets-optimizer/scripts/optimize.js <file>` — PNG→JPG
    (<200 KB, quality floor 50), resize large dims, delete the PNG; MP4 → x264 CRF 28
    preset slow, strip audio (`-an`), in-place.
  - `node .agents/skills/assets-optimizer/scripts/generate-webp.js` — create missing
    `.webp` siblings under `public/assets/images`.

## Hard constraints

- **Filename (SEO backlog 7.1):** descriptive Spanish kebab-case from the page/treatment
  slug + role, e.g. `limpieza-facial-profunda-antes.jpg`. Not `hero.jpg` / `card.jpg`.
  Name it right on pass 1 (MEMORY `feedback_asset_naming_seo_first_time`). If an existing
  slot uses a generic name, keep it by default to avoid data churn; rename only on user
  request, and then update the `src/data/*.js` ref + regenerate the `.webp`.
- **Alt text:** Spanish, descriptive, traceable to vetted copy — do not invent
  (MEMORY `feedback_no_inventar_contenido`). No banned words / medical claims —
  cross-check `docs/MEDICAL_COMPLIANCE.md`.
- **Before/after (SEO backlog 7.2):** set `beforeAlt` / `afterAlt` in
  `src/data/landingPages.js`. Never rely on the hardcoded `"Before"` / `"After"`.
- **One change per cycle** (CLAUDE.md). One slot filled = one cycle = one commit.
- **Approval gate before editing `src/data/*.js`.** New section appears on the page →
  present one decided plan (files, names, alt, what renders) and get a single yes.
  Full `superpowers:brainstorming` only when the section needs a component change or a
  layout decision (MEMORY `feedback_decide_dont_interrogate`).
- **DoD for visual change:** `test:visual` no unintended diffs; copy cross-checked
  against `docs/MEDICAL_COMPLIANCE.md`; WCAG 2.1 AA.

## Acción A — Fill an existing empty slot

Create a todo per step.

1. **Locate.** `grep` the path string across `src/data/*.js`. Identify page/section/
   treatment, asset role (hero 1920×1080, card, overview, before/after), and the
   surrounding copy to source alt text from. If the data key is absent (Acción B),
   grep the key across `src/components/templates/`: key already read → data-only
   cycle; key not read → stop, that is a component cycle.
2. **Name.** Decide the SEO Spanish kebab filename now (slug + role, e.g.
   `tratamiento-capilar-antes.jpg`), matching the sibling pattern of assets already in
   that dir. If it differs from the path already in `src/data/*.js`, that is a rename —
   flag it, get the user's ok, and plan to update the data ref.
3. **Give the target, then receive.** Hand the user the step-2 filename(s) and the exact
   `public/assets/images/...` dir. The user places the files there — already at the
   final path and named, or raw in `scratchpad/media-in/`. Confirm the 1 file ↔ 1 slot
   mapping before processing. If the user only asked for names, reply with names + path
   and stop.
4. **Place + optimize.** If the file is not already at the target path, move it there —
   `ls` the known source and target dirs, never a recursive `find` across the repo.
   Run `node .agents/skills/assets-optimizer/scripts/optimize.js <file>`. For video:
   also produce the poster `.jpg` (same basename) — extract a frame with
   `ffmpeg -i <video> -vf "select=eq(n\,0)" -q:v 3 <poster>.jpg` if the user gave none.
5. **Generate webp sibling.** `node .agents/skills/assets-optimizer/scripts/generate-webp.js`.
   It scans the whole `public/assets/images` tree and also fills in siblings for any
   unrelated `.jpg` that was missing one. After it runs, `git status`: report every
   `.webp` outside your slot to the user as a separate item, keep or `git rm` per their
   call, and never fold it into this cycle's commit silently. Confirm your slot's
   `.webp` (and poster `.webp` for video) now exist.
6. **Alt text.** Write Spanish, descriptive alt. Source it from vetted copy on the page
   or in `docs/`. Cross-check `docs/MEDICAL_COMPLIANCE.md` for banned words. Before/after
   → `beforeAlt` / `afterAlt` in `src/data/landingPages.js`.
7. **Verify render.** Dev server on `:3000` (start with the project's dev command if not
   already up). Navigate to the page. Confirm the asset paints and is **not** the
   `og-default.jpg` fallback. Check console + network for 404s.
8. **Visual regression.** In another terminal: `npx vite --port=3003 --host=0.0.0.0`,
   then `npx playwright test`. New media will change baselines. Review each diff and
   confirm it is the intended asset, nothing else. Then
   `npx playwright test --update-snapshots` and re-run `npx playwright test` until 0 diffs.
9. **WCAG AA.** alt present + meaningful; video `muted` + `playsInline`; no autoplay
   audio; any text over the image still meets AA contrast.
10. **Close the cycle** (CLAUDE.md ritual): `PROGRESS.md` entry (newest on top);
    `DECISIONS.md` entry if a naming/rename tradeoff was made; refresh `NEXT.md`
    (mark done, next step, expected HEAD); commit; confirmed push; leave the tree clean.

## Acción B — Add a new media slot to a section that has none

Acción A step 1 already splits the two cases. Then:

- **Template reads the key** → data-only cycle. Present one decided plan, get a single
  yes, run Acción A steps 2–10.
- **Template does not read the key** → component cycle. `superpowers:brainstorming` +
  `DESIGN.md` review + approval, on its own commit, before any Acción A step.
- Add the key to the correct object in `src/data/*.js`, copying the shape a sibling
  entry already uses — `image`, `backgroundImage`, `videoSrc` + `mediaSrc`, or
  `beforeAfter: { items: [{ before, after, beforeAlt, afterAlt }] }`.

## Acción C — Hero background video

Specialized Acción A:

- Source must be quiet-safe: audio stripped (`-an`, already done by `optimize.js`);
  target < 3 MB.
- Poster `.jpg` is mandatory, same basename — `HeroMedia.jsx` derives it.
- Generate the poster's `.webp` too (step 5 covers it).
- LCP: the poster must paint fast; confirm `preload="auto"` on the `<video>` is acceptable
  for the page, otherwise raise it with the user.
- Reduced-motion: `HeroMedia.jsx` always autoplays. Note this as an accepted limitation
  unless the user asks for a `prefers-reduced-motion` guard (which is a component change
  → separate cycle).

## Definition of done (every action)

- [ ] File in the correct `public/assets/images/**` subdir
- [ ] Optimized (image < 200 KB, video < 3 MB, `-an`)
- [ ] `.webp` sibling exists (plus poster `.webp` for video)
- [ ] SEO Spanish kebab filename (or rename flagged + approved)
- [ ] `src/data/*.js` ref path matches the file exactly
- [ ] Alt: Spanish, descriptive, traceable to vetted copy, no banned words
- [ ] Renders on `:3000`, no 404, not the `og-default` fallback
- [ ] `test:visual` — diffs reviewed + intentional, baseline updated, re-run clean
- [ ] WCAG AA
- [ ] Docs ritual + commit + confirmed push + clean tree

## Out of scope

- Sourcing or generating the media (the user supplies raw files).
- Component changes to consume new data keys (separate cycle).
- Bulk 7.1 rename audit of assets already on disk (its own cycle).

## Currently missing (candidates for the first Acción A cycles)

All `/nosotros` slots:

- `/assets/images/about/hero.jpg`
- `/assets/images/about/team/melisa-rios.jpg`
- `/assets/images/about/team/mikaela-guajardo.jpg`
- `/assets/images/about/team/daniela-parra.jpg`
- `/assets/images/about/team/elianne-trujillo.jpg`
- `/assets/images/about/team/samantha-atencio.jpg` + `.mp4`
- `/assets/images/about/team/tony-diaz.jpg` + `.mp4`
