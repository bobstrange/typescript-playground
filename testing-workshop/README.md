# testing workshop

[ref](https://github.com/kentcdodds/testing-workshop)

## Setup

```bash
npm init -y

# install TypeScript
npm install -D typescript

# configure linter
npx eslint --init

# prettier
npm install -D prettier eslint-config-prettier

# configure tsconfig.json
npm install -D @tsconfig/node12

<<EOF > tsconfig.json
{
  "extends": "@tsconfig/node12/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules"
  ]
}
EOF

# add testing framework
npm i -D jest ts-jest @types/jest

# generate jest config
# npx ts-jest config:init

<<EOF > jest.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')
const { paths } = compilerOptions

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: '<rootDir>/',
  }),
}
EOF
```
