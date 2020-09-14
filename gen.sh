#!/usr/bin/env bash
set -euo pipefail

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli:v5.0.0-beta2 generate \
  -i https://raw.githubusercontent.com/kubernetes/kubernetes/release-1.19/api/openapi-spec/swagger.json \
  -g typescript \
  --additional-properties=platform=deno \
  -o /local
