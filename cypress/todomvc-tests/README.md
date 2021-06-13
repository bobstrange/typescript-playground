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
