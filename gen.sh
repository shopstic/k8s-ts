#!/usr/bin/env bash
set -euo pipefail

docker run --rm \
  -v "${PWD}:/local" \
  openapitools/openapi-generator-cli:v5.0.0-beta2 generate \
  -i https://raw.githubusercontent.com/kubernetes/kubernetes/release-1.19/api/openapi-spec/swagger.json \
  -g typescript \
  --additional-properties=platform=deno \
  "--type-mappings=int-or-string=(number | string)" \
  "--language-specific-primitives=(number | string)" \
  -o /local

find . -type f -name "*.ts" -exec sed -i '' 's/"type": "(number | string)",/"type": "string",/g' {} +   

docker run --rm \
  -v "${PWD}:/local" \
  -w /local \
  shopstic/deno:1.4.6 \
  deno fmt
