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

## Writing your tests

What you need to do is to put a test into `cypress/integrations` folder.
In the test files, you can globally use `chai` assertion methods and `cy`.

```typescript
it('opens google.co.jp', () => {
  cy.visit('https://google.co.jp')
})
```

There is no assertion but if you point a not existing website, the test will be failed.

```typescript
it('should be failed', () => {
  cy.visit('https://google.co.jp/not-exsits-document')
})
```

## Using selector playground

If you click the icon placed left of the address bar, you'll see selector playground.
It captures selector of the element you are selecting.

![selector playground](./assets/selector-playground.png)

## Type something in the input box

You get an input selector then you can type anything.

```typescript
cy.get('.new-todo').type('Tidy room{enter}')
```

`{enter}` indicates enter key.

What if the operation takes less than 4000 ms, cypress waits for it.
If the operation takes more than 4000 ms, the test will be failed.
For such a case, `get` can take an extra argument.

```typescript
cy.get('.new-todo', { timeout: 6000 })
```

## Click event

You get an selector then you can send a click event to it.

```typescript
cy.get('.toggle').click()
```

Other way to get element is `cy.contains()`

```typescript
cy.contains('Clear completed')
// even this works
cy.contains('Clear')
```

## Validations

If you want to validate, if the effect you did is properly reflects on the UI, you can get a element and check if the element contains value as you expected with using `should`

```typescript
cy.get('.new-todo').type('Tidy room{enter}')

// Check if there is a label with text 'Tidy room'
cy.get('label').should('have.text', 'Tidy room')
```

`should` provides many options, eg: you can check the element is checked or not.

```typescript
cy.get('toggle').should('not.be.checked')
cy.get('toggle').click()
cy.get('toggle').should('be.checked')
```

Because `should` receives string argument as an argument, you highly recommended using typescript or importing cypress type definition on the top of your code.

```javascript
/// <reference types="cypress">

it(...)
```
