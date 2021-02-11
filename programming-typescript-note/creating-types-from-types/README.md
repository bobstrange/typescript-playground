# 型から型を作る

[ref](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

## keyof

[code](./keyof.ts)

- `keyof` は、型を受け取ってそれのキーを `union` にして返す
  - `keyof { x: number, y: number } // "x" | "y"`
- 受け取った型が、 `index signature` の場合は、その型自体を返す
  - string or number

## typeof

[code](./typeof.ts)

- `typeof` で 変数 や、プロパティ の型を取得できる
- 単体で使うのではなく、UtilityTypes などと組み合わせて使う事が多い
- `typeof` を適用できるのは、識別子(変数、関数)、とプロパティのみに制限されている

## Indexed Access Types

[code](./indexed_access_types.ts)

- これ、lookup types って言うのかと思ってた、、、
  - [ref](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- そして、`index signature` に対しての lookup どうやるのかと思ってた疑問も書いてあった、、、
  - `SomeType[number]` とか、 `SomeType[string]` とかの lookup ができるとのこと、、、
  - ↓みたいに 3rd party の型定義で、↓みたいな感じで、 index signature の 値の型を個別に定義してくれていない場合

```ts
type UserContainer = {
    [k: string]: {
        name: string
        age: number
    }
}

type MyUser = UserContainer[string]
```

## Conditional Types

[code](./conditional_types.ts)

- 入力の型を、条件を元に判定して、型を出力する
  - 入力型 -> 条件 -> 出力型
- `Input extends Condition ? OutputA : OutputB` の形が頻出
- 用途としては Generics とよく一緒に使われる
  - 入力の型引数 -> 条件 -> 出力の型
- Conditional Types を使うことによって、Generics の型引数を制約することができる
  - 例えば
    - `type Flatten<T> = T extends any[] ? T[number] : T`
- `infer` との併用
  - `infer` を使うことによって、構造をどのように lookup すればよいか？考えなくてよくなる。
  - 例えば ↑ の Flattenは条件が正の場合 T が配列であるということを認識した上で、要素の型を `T[number]` で取り出している
  - しかし `infer` を使用すると
    - `type Flatten2<T> = T extends (infer U)[] ? U : T` と書くことができる。
- Distributive Conditional Types
  - `type Foo<T> = T extends any ? T[] : never` という型が合った場合
  - `type Bar = Foo<string | number>` は `(string | number)[]` ではなく `string[] | number[]` となるよという話
  - そうしたくない場合は、`extends` の両側の型を [] で囲む

## Mapped Types

[code](./mapped_types.ts)

- Mapping Modifiers
  - map 時に `readonly` と `?` を使用できる
  - prefix に `-` もしくは `+` をつけられる (`+` がデフォルト)
  - `-readonly [k in keyof T]` で、T 型の各キーから `readonly` を外す
  - `[k in keyof T]-?` で、T型の各キーから `?` を外す など
