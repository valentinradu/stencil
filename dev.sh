#!/bin/bash

mkdir -p output
chokidar "**/*.mjml" "**/*.json" "**/*.js" -c "mjml <(node examples/${1}.js) > output/${1}.html"