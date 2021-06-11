# Next.js Getting Started

## Setup

### create-next-app で初期化する

```bash
yarn create next-app getting-started
```

### TypeScript 関係の設定を入れる

```bash
touch tsconfig.json
yarn add -D typescript @types/react @types/node
yarn dev
```

### ESLint の設定をする

```bash
yarn eslint --init
```

質問には ↓のように答える

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser, node
✔ What format do you want your config file to be in? · JavaScript
Local ESLint installation not found.
✔ Would you like to install them now with npm? · No

今回は yarn を使うので、最後の質問は No を選ぶ

そして、自前でインストールする

```bash
yarn add -D eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest, eslint@latest
```

### prettier の設定をする

まずはインストール

```bash
yarn add prettier -D
```

そして、`.prettierrc.js` を作成する

```js
module.exports = {
  singleQuote: true,
  semi: false
}
```

ESLint と衝突するルールを抑制するため、`eslint-config-prettier` をインストールする

```bash
yarn add -D eslint-config-prettier
```

そして、`.eslintrc.js` の、`extends` の部分の末尾に、 `"prettier"` を追加する

```js
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
```

.prettierignore を作成する

```text
node_modules
.next
**/dist/**
tsconfig.json
README.md
```

## Page

/pages 配下に格納したファイルがそのまま path となる
動的な path の定義は、動的に変わる部分を [] で囲めば良い

/pages/index.tsx -> https://<your.domain>
/pages/notes/index.tsx -> https://<your.domain>/notes
/pages/notes/[id].tsx -> https://<your.domain>/notes/1

動的な path は、router オブジェクトから取得できる。
パラメータの名前は、 [] で囲った名前と一致する

/[id] -> router.query.id

```typescript
import { useRouter } from 'next/router'
const Page:FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>id: {id}</h1>
    </div>
  )
}
```

### Catch all routes

JavaScript の Spread operator みたいな事ができる。

/notes/[...params].tsx

```typescript
  const router = useRouter()
  const { params } = router.query
  console.log(params)

  return <h1>Note {params}</h1>
```

このルートは、以下の全てに match する

/notes/1
/notes/1/2
/notes/foo/bar/baz

それぞれの場合の params は

/notes/1             -> ["1"]
/notes/1/2           -> ["1", "2"]
/notes/foo/bar/baz   -> ["foo", "bar", "baz"]

のようになる

さらに、親ディレクトリのパスにも対応させるばあいは `[[...]]` のように二重の brackets を使用する
(Optional catch all routes)

この場合 /notes も、このルートでハンドリングされるようになる

Catch-All routes はおもに、Document や Wiki など、同じ構造の大量のページを用意する時に有効

## Navigation

### Static Routing

Page 間の遷移は、`next/link` で行う

```typescript
<Link href="/notes">
  <a>notes</a>
</Link>
```

動的ページへの遷移は `as` を使用する

```typescript
<Link href="/notes/[id]" as="/notes/1">
  <a>Notes 1</a>
</Link>
```

### Programmatic Routing

```typescript
router.push('/notes')
router.push('/notes/[id]', `/notes/${id}`)
```

## Styling

### Global CSS

グローバルに適用する css は `pages/_app.tsx` で読み込む

```typescript
import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
export default App
```
