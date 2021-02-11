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

[ref](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
[code](./mapped_types.ts)

- Mapping Modifiers
  - map 時に `readonly` と `?` を使用できる
  - prefix に `-` もしくは `+` をつけられる (`+` がデフォルト)
  - `-readonly [k in keyof T]` で、T 型の各キーから `readonly` を外す
  - `[k in keyof T]-?` で、T型の各キーから `?` を外す など
- as による Key の Remapping
  - `[K in keyof T as NewType]` で、キー名を別の名前にマッピングできる
  - string literal type を使うと、prefix を付加したり capitalize したりなど色々できる

## Template Literal Types

[ref](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
[code](./template_literal_types.ts)

- JavaScript の template literal のような文法で、文字列リテラル型を元に新しい文字列リテラル型を作る機能
  - `World` という文字列リテラル型を使って新しく `Greeting` という文字列リテラル型を作る例

```ts
type World = 'world'
type Greeting = `hello ${World}`
```

- Union が interpolate される場所に使用された場合は、有りうる組み合わせ毎に型が作られる

```ts
type Horizontal = 'Left' | 'Right'
type Vertical = 'Top' | 'Bottom'
type Corner = `${Vertical}${Horizontal}`
// type Corner = 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight'
```

- 一般的には、大きな文字列の結合には、事前に生成することを推奨する
  - 小さい場合には有効
