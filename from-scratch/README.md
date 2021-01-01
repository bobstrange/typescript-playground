# from-scratch

TypeScript のプロジェクトを 1 から作るための手順
[ref](https://frontendmasters.com/courses/production-typescript/creating-a-project-from-scratch/)

```shell
# gitignore ファイルの作成
npx gitignore node

# package.json ファイルの作成
npm init -y
```

`package.json` で、entry point と、type definition を設定

```json
...
"main": "dist/index.js",
"types": "dist/index.d.ts"
...
```

`package.json` で、ビルドスクリプトを設定

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
