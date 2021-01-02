# from-scratch

TypeScript のプロジェクトを 1 から作るための手順
[ref](https://frontendmasters.com/courses/production-typescript/creating-a-project-from-scratch/)

## init

```shell
# gitignore ファイルの作成
npx gitignore node

# package.json ファイルの作成
npm init -y
```

## `package.json` で、entry point と、type definition を設定

```json
...
"main": "dist/index.js",
"types": "dist/index.d.ts"
...
```

## `package.json` で、ビルドスクリプトを設定

```json
...
"scripts": {
    "build": "tsc",
    "dev": "npm build --watch --preserveWatchOutput",
    "lint": "eslint ./src --ext js,ts",
    "format": "prettier --write ./src --ext js.ts",
    "test": "jest"
    ...
```

```shell
npm install -D typescript eslint prettier jest
```

## `tsconfig.json` の作成

```shell
npx tsc --init
```

`tsconfig.json` を編集

```json
...
    "target": "ES2018",
...
    "outDir": "./dist",
...
    "rootDir": "./src",
...
    "declaration": true,
    "stripInternal": true,
...
    "noUnusedLocals": true,
    "noUnusedParameters": true,
...
  "include": ["src"]
```

※ Library を作る場合は、 `esModuleInterop` を false に、`skipLibCheck` も false にする
理由は、`esModuleInterop` が有効だと、ライブラリの使用者も、`esModuleInterop` を有効にすることを強制してしまうため。

`stripInternal`: true
JSDocに `@internal` のアノテーションをつけた場合に、型定義ファイルに出力しない設定
`export` はしているが、実際に最終的な API としては提供しないようなものに設定する

`rootDir` はOutputの、rootDir
`"."` を指定すると`./dist/src/index.js` のように出力される

### types について

デフォルトだと、 `TypeScript` は、 `node_modules/@types` にある型を全部 import して、global scope に追加する。
例えば、 dev dependency の物も、、、
それを細やかに管理するために、 `"types": []` にすると良い (Library を作る場合は)

## eslint の設定について

```shell
npx eslint --init
```

>? How would you like to use ESLint? …
> To check syntax only
>▸ To check syntax and find problems
> To check syntax, find problems, and enforce code style

Code Style は Prettier に任せたほうが良いので、`To check syntax and find problems`

.eslintrc.js でいくつか修正を加える

```js
...
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
...
```

`"plugin:@typescript-eslint/recommended-requireing-type-checking"` より詳細な型についての Lint
プロジェクトが大きくならないなら入れておいたほうが良い。

```js
  rules: {
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-params": "off",
  }
```

`"@typescript-eslint/no-unused-vars": "off",`
`"@typescript-eslint/no-unused-params": "off",`
このあたりは TypeScript の Compiler に任せた方が良い

```json
    "noUnusedLocals": true,                /* Report errors on unused locals. */
    "noUnusedParameters": true,            /* Report errors on unused parameters. */
```

`tsconfig.eslint.json` を作成して、 `.eslintrc.js` の `project` に設定する
もともとの、`tsconfig.json` には、`src` しか include していないが、 ESLint の対象にしたいファイルは、`tests` なども含まれるので。

tsconfig.eslint.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": ["jest"]
  },
  "include": ["src", "tests"]
}
```

.eslintrc.js

```js
  parserOptions: {
    ecmaVersion: 12,
    project: "tsconfig.eslint.json",
  }
```

```js
  overrides: [
    {
      files: ["tests/**/*.ts"],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
```

## Test の設定

必要な依存関係をインストール

```shell
npm install -D jest @types/jest @babel/preset-env @babel/preset-typescript
```

`.babelrc.js` の設定

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: 12 },
      },
    ],
    "@babel/preset-typescript",
  ],
};
```

これだけで、 TypeScript で書いたコードで、 jest を実行できる。
Webpack なども不要 !!

## API Extractor

API Documentation Tool
@microsoft/api-extractor

インストール

```shell
npm install @microsoft/api-extractor @microsoft/api-documenter
```

設定ファイルの初期化

```shell
npx api-extractor init
```

`api-extractor.json` が生成される
※ Editor の設定を、JSON with Comments 形式にするとエラーが消える。

設定ファイルの編集

```json
"mainEntryPointFilePath": "<projectFolder>/dist/index.d.ts"
```

`etc` ディレクトリ作成

```shell
mkdir etc
```

## api-extractor 実行

`api-extractor` を実行すると、 `dist` 配下( `untrimmedFilePath`, `betaTrimmedFilePath`, `publicTrimmedFilePath` に設定したディレクトリ) に型定義ファイルが出力される。

```shell
npx api-extractor run --local
```

※ `--local` はプロダクションビルドなどの時につかう
通常時は `--local` オプション無しで実行する

## api-documenter 実行

```shell
npx api-documenter markdown -i temp -o docs
```
