# How is zx

## 実行ファイルの作り方

- `.mjs` でファイル作る
- shebang を書く `#!/usr/bin/env zx`
- 実行権限を追加して実行
  - `chmod +x ./script.mjs; ./script.mjs`
- もしくは、`zx` コマンドから実行
  - `zx ./script.mjs`

## TypeScript の実行ファイル

- `*.ts` でファイル作る
- shebang を書く `#!/usr/bin/env zx`
- 型情報もらうために、zx パッケージをインポートする
  - `import 'zx'`
- 実行権限を追加して実行
  - `chmod +x ./typescript.ts; ./typescript.ts`
- もしくは、`zx` コマンドから実行
  - `zx ./typescript.ts`
