#!/usr/bin/env bash
set -euo pipefail

# Audits the LIVE published site via Google's PageSpeed Insights API v5 — the
# same engine/data as manually running https://pagespeed.web.dev in a browser,
# just scriptable. This is NOT a local check (see `npm run lighthouse` for that);
# it always hits the real deployed URL.
#
# Usage: npm run pagespeed [mobile|desktop] [url]
#   default url: https://dermamskinhealth.com/

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$PROJECT_ROOT/.env.pagespeed"

if [ -f "$ENV_FILE" ]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

if [ -z "${PAGESPEED_API_KEY:-}" ]; then
  echo "Missing PAGESPEED_API_KEY. Copy .env.pagespeed.example to .env.pagespeed and fill it in." >&2
  exit 1
fi

STRATEGY="${1:-mobile}"
URL="${2:-https://dermamskinhealth.com/}"

echo "Auditing $URL ($STRATEGY) via PageSpeed Insights API..."

RESPONSE="$(curl -s -G "https://www.googleapis.com/pagespeedonline/v5/runPagespeed" \
  --data-urlencode "url=$URL" \
  --data-urlencode "strategy=$STRATEGY" \
  --data-urlencode "category=performance" \
  --data-urlencode "key=$PAGESPEED_API_KEY")"

if echo "$RESPONSE" | grep -q '"error"'; then
  echo "$RESPONSE" | node -e "
    const data = JSON.parse(require('fs').readFileSync(0, 'utf8'));
    console.error('API error:', data.error.message);
    process.exit(1);
  "
  exit 1
fi

echo "$RESPONSE" | node -e "
  const data = JSON.parse(require('fs').readFileSync(0, 'utf8'));
  const lh = data.lighthouseResult;
  const audits = lh.audits;
  const cache = audits['cache-insight'] || audits['uses-long-cache-ttl'];
  console.log('Performance:', Math.round(lh.categories.performance.score * 100));
  console.log('FCP:', audits['first-contentful-paint'].displayValue);
  console.log('LCP:', audits['largest-contentful-paint'].displayValue);
  console.log('TBT:', audits['total-blocking-time'].displayValue);
  console.log('CLS:', audits['cumulative-layout-shift'].displayValue);
  if (cache) {
    console.log('Cache lifetimes audit:', cache.displayValue || 'passed');
    const items = (cache.details && cache.details.items) || [];
    items.slice(0, 5).forEach(i => {
      console.log('  -', i.url, '| cacheLifetimeMs:', i.cacheLifetimeMs, '| wastedBytes:', Math.round(i.wastedBytes || 0));
    });
  }
"
