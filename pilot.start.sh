#!/bin/bash
set -euo pipefail

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "GITHUB_TOKEN is not set. Export it first." >&2
  exit 1
fi

pilot start --github --dashboard
