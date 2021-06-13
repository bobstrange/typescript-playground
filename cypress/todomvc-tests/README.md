# cypress todo-mvc

## Setup

Install cypress deps

```bash
yarn add -D cypress
```

Configure npm scripts

```json
"scripts": {
  "cypress:open": "cypress open"
}
```

Run `npx cypress:open` then it automatically inits /cypress directory.

The most important directory is /cypress/integration.
You'll write your tests under it.
There are some examples there so you should delete them first.

`rm -fr ./cypress/integration/examples`

### Use TypeScript

[ref](https://docs.cypress.io/guides/tooling/typescript-support)

Install TypeScript. `yarn add -D typescript`

Configure tsconfig.json.
You should add the tsconfig.json inside your `/cypress` folder.

```json
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["es5", "dom"],
        "types": ["cypress"]
    },
    "include": ["**/*.ts"]
}
```
