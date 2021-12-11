# next-ts

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
