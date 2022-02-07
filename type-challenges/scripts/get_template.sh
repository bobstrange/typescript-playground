#!/bin/bash

BASE_URL=https://raw.githubusercontent.com/type-challenges/type-challenges/master/questions
BASE_DIR=${2:-'src/second'}

FILE_PATH=${BASE_DIR}/${1}.ts
if [[ -f ${FILE_PATH} ]]; then
  echo "File ${FILE_PATH} already exists"
  exit 1
fi

curl "${BASE_URL}/${1}/template.ts" > ${FILE_PATH}
curl "${BASE_URL}/${1}/test-cases.ts" >> ${FILE_PATH}
