#!/usr/bin/env bash
set -euo pipefail

OPENAPI_GENERATOR_VESION="5.3.1"
KUBERNETES_VERSION="1.22"

rm -Rf ./src
mkdir ./src

docker run --rm \
  -v "${PWD}/src:/local" \
  openapitools/openapi-generator-cli:v"${OPENAPI_GENERATOR_VESION}" generate \
  -i https://raw.githubusercontent.com/kubernetes/kubernetes/release-${KUBERNETES_VERSION}/api/openapi-spec/swagger.json \
  -g typescript \
  --additional-properties=platform=deno \
  --global-property models \
  -o /local

# Run deno fmt twice for deterministic results
deno fmt && deno fmt

deno run -A ./post-process.ts
