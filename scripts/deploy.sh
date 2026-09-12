#!/usr/bin/env bash
set -euo pipefail

# Deploys dist/ to Hostinger over SSH (tar + ssh, no rsync dependency).
# Reads connection details from .env.deploy (gitignored, local-only).
# dist/ includes .htaccess, robots.txt, sitemap.xml, llms.txt (Vite copies
# everything from public/), so those get overwritten with this repo's
# current versions on every deploy too — public/ is the source of truth.
# assets/ is deleted remotely before extracting, since Vite content-hashes
# its filenames (e.g. index-B1tmhX6v.js) and old hashes would otherwise
# never get overwritten and pile up forever.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$PROJECT_ROOT/.env.deploy"

if [ ! -f "$ENV_FILE" ]; then
  echo "Missing $ENV_FILE — copy .env.deploy.example and fill in your values." >&2
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"

: "${SSH_HOST:?Set SSH_HOST in .env.deploy}"
: "${SSH_PORT:?Set SSH_PORT in .env.deploy}"
: "${SSH_USER:?Set SSH_USER in .env.deploy}"
: "${SSH_KEY:?Set SSH_KEY in .env.deploy}"
: "${REMOTE_PATH:?Set REMOTE_PATH in .env.deploy}"

echo "Building..."
cd "$PROJECT_ROOT"
rm -rf dist
npm run build

echo "Uploading dist/ to $SSH_USER@$SSH_HOST:$REMOTE_PATH ..."
tar -czf - -C "$PROJECT_ROOT/dist" . | \
  ssh -i "$SSH_KEY" -p "$SSH_PORT" -o BatchMode=yes "$SSH_USER@$SSH_HOST" \
    "rm -rf '$REMOTE_PATH/assets' && tar -xzf - -C '$REMOTE_PATH'"

echo "Deploy complete."
