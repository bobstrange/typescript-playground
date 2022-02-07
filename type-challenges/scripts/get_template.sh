#!/bin/bash

BASE_URL=https://raw.githubusercontent.com/type-challenges/type-challenges/master/questions
BASE_DIR=${2:-'src/second'}

curl "${BASE_URL}/${1}/template.ts" > ${BASE_DIR}/${1}.ts
