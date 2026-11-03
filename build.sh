#!/bin/bash
# Do NOT edit this build file unless you know what you are doing (or even if).

rm -rf ./dist # remove the previous JS files
sh generate_index_file.sh # create index.ts
tsc --project tsconfig.json # compile TS into JS
