# cypress studio experiment

[cypress studio](https://docs.cypress.io/guides/core-concepts/cypress-studio#Overview) を試してみる

まずは普通に setup

```bash
npm init -y
npm i -D cypress typescript
npx eslint --init
npm i -D prettier eslint-config-prettier
cat <<EOF > .prettierrc.js
module.exports = {
  semi: false,
  singleQuote: true
}
EOF
npx cypress open
cat <<EOF > cypress/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2019",
    "lib": ["ES2019", "dom"],
    "types": ["cypress"]
  },
  "include": ["**/*.ts"]
}
EOF
```

Cypress Studio を使用するためには、`cypress.json` に設定を追加する必要あり

```json
{
  "experimentalStudio": true
}
```
