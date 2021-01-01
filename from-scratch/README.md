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

