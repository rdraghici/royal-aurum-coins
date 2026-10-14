#!/usr/bin/env bash
# Applies a Product Change that a human has approved. Run by Răzvan, never by an agent.
#
#   1. Review docs/product/changes/active/<chg-id>/ (change.md and everything under proposed/).
#   2. Set `status: approved` in its change.md.
#   3. scripts/product-accept.sh CHG-…
#   4. Commit the result and merge it. The merge is what accepts the definition.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

ID="${1:-}"
if [ -z "$ID" ]; then
  echo "usage: scripts/product-accept.sh CHG-ID" >&2
  pnpm exec prodshape change list
  exit 2
fi

DIR="docs/product/changes/active/$(echo "$ID" | tr '[:upper:]' '[:lower:]')"
if [ ! -f "$DIR/change.md" ]; then
  echo "No open Product Change at $DIR" >&2
  exit 1
fi

if ! grep -qE '^status: approved[[:space:]]*$' "$DIR/change.md"; then
  echo "$ID is not approved." >&2
  echo "Review $DIR, then set 'status: approved' in $DIR/change.md and run this again." >&2
  exit 1
fi

pnpm exec prodshape change validate "$ID"
pnpm exec prodshape change apply "$ID"

echo
echo "Applied. Checking tasks against the new definition:"
if ! scripts/verify.sh fast product; then
  echo
  echo "Tasks reported as stale cite a rule this change modified."
  echo "Re-read each one against the rule, fix the task if needed, then re-stamp it:  pnpm tasks:cite T-0xx"
  exit 1
fi
echo
echo "Next: commit docs/product and merge. The merge accepts the definition."
