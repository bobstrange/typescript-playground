# 型から型を作る

[ref](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

## keyof

[code](./keyof.ts)

- `keyof` は、型を受け取ってそれのキーを `union` にして返す
  - `keyof { x: number, y: number } // "x" | "y"`
- 受け取った型が、 `index signature` の場合は、その型自体を返す
  - string or number
