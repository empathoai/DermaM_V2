# Footer build version indicator — design spec

## Problem

There is no way to confirm, by looking at the live site, which commit a deploy is actually
serving. Deploys are manual (build `dist/`, zip, upload to Hostinger File Manager) — a stale
upload, a wrong zip, or a partial extraction has no visible signal. `package.json`'s `version`
field (`0.0.0`) is unused and not a viable source of truth (nobody bumps it).

## Goal

Show a short, discreet build identifier in the footer so a git commit hash + build date can be
read directly off the live page and compared against `git log`, without opening devtools.

## Non-goals

- No visible "release notes" or changelog UI.
- No semantic version numbers (`v1.2.3`) — no process exists to bump them and one won't be
  introduced by this change.
- No automated deploy pipeline — deploys stay manual; this only makes an existing manual deploy
  verifiable.

## Design

### Mechanism: Vite `define`, computed at build time

`vite.config.js` computes two values inside the existing `defineConfig(() => {...})` callback and
exposes them as global constants via the `define` option:

```js
import { execSync } from 'child_process';

function getBuildHash() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'dev';
  }
}

// inside defineConfig(() => { ... return { ...
define: {
  __BUILD_HASH__: JSON.stringify(getBuildHash()),
  __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
},
```

- `getBuildHash()` wraps `execSync` in try/catch: if `git` isn't available or `.git` is missing
  (unlikely, but e.g. a zip-only environment), it falls back to the literal string `"dev"` rather
  than failing the build.
- `__BUILD_DATE__` is the build-machine's timestamp at the moment `vite build` runs — stamped once
  per build, not per request (this is a static SPA, no server-side render).
- Both constants are inlined as string literals by esbuild at build time, same mechanism Vite
  already uses for `import.meta.env.*` — no runtime cost, no new dependency.
- The existing `DISABLE_HMR` server-config branch is untouched.

Global constants need a type/lint declaration in a JS project only if a linter enforces
`no-undef` — this repo has no linter (`npm run lint` is a no-op), so no declaration file is
required. If TypeScript tooling is ever added, `__BUILD_HASH__`/`__BUILD_DATE__` would need a
`vite-env.d.ts` entry at that time — out of scope now.

### Footer rendering

`Footer.jsx` reads the two globals directly (no import needed, they're compile-time globals) and
renders one line inside the existing bottom bar (the `<div className="mt-16 pt-8 border-t ...">`
block, alongside the copyright line), formatted as:

```
build de8c84d · 12 sep 2026
```

- Date formatted with `toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year:
  'numeric' })` from the ISO string, lowercased, matching the site's Spanish-first copy.
- Placed as a 4th item in the existing flex bottom-bar row (`order-4`), same text size/color as
  the copyright line (`text-xs ... text-[#BBB8B5] font-light`) — no new visual weight, no new
  color, no icon.
- No link, no tooltip, no click behavior — plain text.

### What this does NOT change

- No change to `TreatmentDetailPage.jsx` or any other component.
- No change to `package.json` `version` field (left at `0.0.0`, still unused — this feature doesn't
  depend on it and doesn't try to fix that separately).
- No test:visual baseline is expected to change meaningfully: the bottom bar already wraps
  responsively (`flex-col lg:flex-row`), and one more short text item follows the same pattern as
  the existing three. This IS a shared layout component used on every page, so the DoD gate
  applies — `test:visual` must run and any diff must be reviewed before considering this done.

## Verification plan

1. `npm run build`, confirm the footer shows a real 7-char hash matching `git rev-parse --short
   HEAD` and today's date, on both desktop and mobile viewport in the Browser pane.
2. Confirm `npm run dev` still works and shows a hash too (git is available in the dev environment
   the same way).
3. Run `npx playwright test tests/visual.spec.js` per the CLAUDE.md DoD gate (shared component
   edit) — review any footer-related diff before accepting/re-baselining.
