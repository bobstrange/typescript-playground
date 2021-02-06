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
