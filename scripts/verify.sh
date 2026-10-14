#!/usr/bin/env bash
# The definition of done. A change is finished when this exits 0, and not before.
#
#   scripts/verify.sh fast            quick loop while working: product checks, compile and static
#                                     analysis, architecture and unit tests, lint, type check
#   scripts/verify.sh full            everything in `fast`, plus integration tests against a real
#                                     database, coverage thresholds, licence check, production
#                                     build of the web app and end-to-end tests
#   scripts/verify.sh fast product    run only the named step(s): product, policy, api, web
#
# Each step's full output goes to .verify/<step>.log; the last lines are shown when it fails.
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

TIER="${1:-full}"
case "$TIER" in
  fast|full) shift || true ;;
  *) echo "usage: scripts/verify.sh [fast|full] [product] [policy] [api] [web]" >&2; exit 2 ;;
esac
if [ "$#" -gt 0 ]; then STEPS=("$@"); else STEPS=(product policy api web); fi

LOG_DIR="$ROOT/.verify"
mkdir -p "$LOG_DIR"
FAILED=()

run() { # run <label> <command...>   — appends the command's output to the current step's log
  local label="$1"
  shift
  echo "── $label: $*" >>"$LOG"
  "$@" >>"$LOG" 2>&1
}

step_product() {
  run "validate" pnpm exec prodshape validate || return 1
  run "tasks" node scripts/lib/check-tasks.mjs || return 1
  run "citations" node scripts/lib/check-citations.mjs || return 1
  run "behaviours" node scripts/lib/check-behaviours.mjs || return 1
}

step_policy() {
  run "protected" node scripts/lib/check-protected.mjs || return 1
  run "suppressions" node scripts/lib/check-suppressions.mjs || return 1
}

step_api() {
  if [ ! -f apps/api/pom.xml ]; then
    echo "apps/api does not exist yet: it is created by task T-001." >>"$LOG"
    return 1
  fi
  if [ "$TIER" = fast ]; then
    (cd apps/api && run "maven" ./mvnw -B -q -DskipITs verify) || return 1
  else
    (cd apps/api && run "maven" ./mvnw -B -q verify) || return 1
  fi
}

step_web() {
  if [ ! -f apps/web/package.json ]; then
    echo "apps/web does not exist yet: it is created by task T-002." >>"$LOG"
    return 1
  fi
  run "web" pnpm --filter web run "verify:$TIER" || return 1
}

for STEP in "${STEPS[@]}"; do
  case "$STEP" in
    product|policy|api|web) ;;
    *) echo "unknown step: $STEP (expected product, policy, api or web)" >&2; exit 2 ;;
  esac
  LOG="$LOG_DIR/$STEP.log"
  : >"$LOG"
  START=$(date +%s)
  if "step_$STEP"; then
    printf 'PASS  %-8s %ss\n' "$STEP" "$(( $(date +%s) - START ))"
  else
    printf 'FAIL  %-8s %ss   (log: .verify/%s.log)\n' "$STEP" "$(( $(date +%s) - START ))" "$STEP"
    tail -n 40 "$LOG" | sed 's/^/      /'
    FAILED+=("$STEP")
  fi
done

if [ "${#FAILED[@]}" -gt 0 ]; then
  echo "VERIFY FAILED (tier=$TIER): ${FAILED[*]}"
  exit 1
fi
echo "VERIFY PASSED (tier=$TIER, steps=${STEPS[*]})"
