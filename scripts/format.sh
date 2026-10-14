#!/usr/bin/env bash
# Formats the code. Run before scripts/verify.sh; verify only checks formatting, it never fixes it.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [ -f apps/api/pom.xml ]; then
  (cd apps/api && ./mvnw -B -q spotless:apply)
fi
if [ -f apps/web/package.json ]; then
  pnpm --filter web run format
fi
