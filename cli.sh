#!/usr/bin/env bash
set -euo pipefail

THIS_DIR="$(dirname "$(realpath "$0")")"

build_npm() {
  deno run -A --check "$THIS_DIR"/scripts/build-npm.ts "$@"
}

publish_npm() {
  npm publish ./dist
}

gen_types() {
  local SPEC_URL=${1:-"https://raw.githubusercontent.com/kubernetes/kubernetes/v1.24.9/api/openapi-spec/swagger.json"}

  echo "// deno-lint-ignore-file no-empty-interface" > "$THIS_DIR"/src/openapi.ts
  echo "// Generated from ${SPEC_URL}" >> "$THIS_DIR"/src/openapi.ts
  openapi-ts-gen <(curl -sf "${SPEC_URL}") "$THIS_DIR"/scripts/openapi-ts-formatter.mjs >> "$THIS_DIR"/src/openapi.ts

  echo "// Generated from ${SPEC_URL}" > "$THIS_DIR"/src/legacy-types.ts
  deno run -A --check "$THIS_DIR"/scripts/generate-legacy-types.ts "${SPEC_URL}" >> "$THIS_DIR"/src/legacy-types.ts

  "$0" auto_fmt
}

code_quality() {
  echo "Checking for unformatted TypeScript sources"
  deno fmt --check
  echo "Linting all TypeScript sources"
  deno lint
}

auto_fmt() {
  echo "Auto-formatting TypeScript sources"
  deno fmt
}

update_cache() {
  echo "Updating cache"
  deno cache --no-lock ./src/**.ts ./scripts/**.ts
  echo "All good!"
}

"$@"