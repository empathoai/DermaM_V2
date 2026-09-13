#!/usr/bin/env bash
set -euo pipefail

# Runs a real Lighthouse audit against the production build, served locally via
# `vite preview`. Mirrors Google's own PageSpeed Insights defaults (mobile:
# emulated Moto G Power + Slow 4G; desktop: no throttling) so results are
# directly comparable to pagespeed.web.dev instead of relying on any third-party
# proxy checker.
#
# Usage: npm run lighthouse [mobile|desktop]  (default: mobile)

DEVICE="${1:-mobile}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT=4173
URL="http://localhost:$PORT"
REPORT_DIR="$PROJECT_ROOT/lighthouse-reports"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
REPORT_PATH="$REPORT_DIR/$TIMESTAMP-$DEVICE.html"

mkdir -p "$REPORT_DIR"

echo "Building..."
cd "$PROJECT_ROOT"
rm -rf dist
npm run build

echo "Starting preview server on $PORT..."
# Run vite's own binary directly (not via `npx`) so $! is the real server PID,
# not an npx wrapper's PID whose child would otherwise survive a `kill`.
"$PROJECT_ROOT/node_modules/.bin/vite" preview --port=$PORT --host=0.0.0.0 > /tmp/lighthouse-preview.log 2>&1 &
PREVIEW_PID=$!
cleanup() {
  kill "$PREVIEW_PID" 2>/dev/null || true
  wait "$PREVIEW_PID" 2>/dev/null || true
}
trap cleanup EXIT

for i in $(seq 1 20); do
  if curl -s -o /dev/null "$URL"; then break; fi
  sleep 0.5
done

if [ "$DEVICE" = "desktop" ]; then
  PRESET_ARGS="--preset=desktop"
else
  PRESET_ARGS=""
fi

echo "Running Lighthouse ($DEVICE) against $URL..."
# chrome-launcher's post-run temp-profile cleanup can fail with EPERM on
# Windows (file lock from AV/indexing) even though the audit itself succeeded
# and the report was already written — don't let that non-fatal cleanup error
# abort the script under `set -e`.
set +e
npx lighthouse "$URL" \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path="$REPORT_PATH" \
  --chrome-flags="--headless=new" \
  $PRESET_ARGS \
  --quiet
LH_EXIT=$?
set -e

if [ -f "$REPORT_PATH" ]; then
  echo "Report saved: $REPORT_PATH"
else
  echo "Lighthouse failed, no report generated (exit $LH_EXIT)." >&2
  exit 1
fi
