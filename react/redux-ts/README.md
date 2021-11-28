# redux TypeScript

[こちら](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/learn/lecture/24336992) の写経とメモ

## Setup

Redux 関連の依存 `react-redux`, `redux`, `redux-thunk` を入れる

```bash
yarn add axios react-redux redux redux-thunk
```

型定義は、`react-redux` だけで良い

- npm
  - [redux](https://www.npmjs.com/package/redux)
    - framework に縛られない standalone な framework
  - [react-redux](https://www.npmjs.com/package/react-redux)
    - redux の react binding [参考](https://react-redux.js.org/introduction/why-use-react-redux)
  - [redux-thunk](https://www.npmjs.com/package/redux-thunk)

## 設計

- npm の package を検索するアプリケーション
- package は TypeScript の予約語なので、このアプリケーションのドメインでは repository と呼ぶことにする
- Store は
  - repositories
    - data (取得したレポジトリの一覧)
    - loading 状態
    - error
- ActionCreator は searchRepository(keyword) を提供する
- Action は
  - SearchRepositories
  - SearchRepositoriesSuccess
  - SearchRepositoriesError

## ディレクトリ構造

一般的なディレクトリ構造だと、component が、redux 関連の依存を大量に import する必要があるのであまり推奨できない :-(

src/
  components/
    App.tsx
    RepositoriesList.tsx
  reducers
  action_creators
  middlewares

redux 関連のエントリポイントを 1 つに絞った方が良い

src/
  components/
    App.tsx
    RepositoriesList.tsx
  redux/
    index.ts
    reducers
    action_creators
    middlewares

## Store の型付け

Reducer を JavaScript で書くと

```javascript
const reducer = (state, action) => {
  switch(action.type) {
    case 'SOMETHING':
      return { foo: action.payload.foo, ...state }
    default:
      return state
  }
}
```

- state を型付けする
- action を型付けする
  - 各 Action の type の型 を作る
    - store/action-types/index.ts
    - こちらは 1 つのファイルに全部格納する
  - 各 Action を作る
    - store/actions/index.ts
    - こちらは、複数のファイルに分けても良い
      - store/actions/repositories.ts
