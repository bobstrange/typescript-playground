# next-ts

[ref](https://www.udemy.com/course/next-js-typescript-with-shopify-integration-full-guide)

## Create a project

Just run `npx create-next-app <project_name>`

## Setup TypeScript

You could init project with TypeScript support with `--typescript` option but this will tell how you setup TypeScript manually.

- Add empty `tsconfig.json`
- Restart dev server `npm run dev` will update tsconfig.json.
- Install TypeScript and React type definition `npm i -D typescript @types/react`
- Remove unused files
  - pages/_app.js
  - pages/api/hello.js
  - styles
- Update public/index.js to index.tsx and just render `return (<div>Hello</div>)` or something.

## Add formatter

[Next.js ESLint](https://nextjs.org/docs/basic-features/eslint)

- Add `next lint` as a script to `package.json`
- Install deps
  - `npm i -D eslint eslint-config-next`
  - To work with prettier you need to install `prettier` and `eslint-config-prettier` as well.
    - `npm -i D prettier eslint-config-prettier`
- Add `.eslintrc.js`
  - You just need to extend `next` and `prettier`
    ```js
    /** @type {import('eslint').Linter.Config} */
    module.exports = {
      extends: ["next", "prettier"]
    }
    ```
- Add `.prettierrc.js`

