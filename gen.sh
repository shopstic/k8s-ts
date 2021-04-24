#!/usr/bin/env bash
set -euo pipefail

OPENAPI_GENERATOR_VESION="5.0.1"
KUBERNETES_VERSION="1.21"

docker run --rm \
  -v "${PWD}/src:/local" \
  openapitools/openapi-generator-cli:v"${OPENAPI_GENERATOR_VESION}" generate \
  -i https://raw.githubusercontent.com/kubernetes/kubernetes/release-${KUBERNETES_VERSION}/api/openapi-spec/swagger.json \
  -g typescript \
  --additional-properties=platform=deno \
  "--type-mappings=int-or-string=(number | string)" \
  "--language-specific-primitives=(number | string)" \
  -o /local

find . -type f -name "*.ts" -exec sed -i '' 's/"type": "(number | string)",/"type": "string",/g' {} +   

# Run deno fmt twice for deterministic results
docker run --rm \
  -v "${PWD}/src:/local" \
  -w /local \
  shopstic/deno:1.9.2 \
  bash -c "deno fmt && deno fmt"
