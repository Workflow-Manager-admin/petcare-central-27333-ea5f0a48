#!/bin/bash
cd /home/kavia/workspace/code-generation/petcare-central-27333-ea5f0a48/petcare_central
source venv/bin/activate
flake8 .
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

