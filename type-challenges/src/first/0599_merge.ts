import { Expect, Equal } from '@type-challenges/utils'

type Merge<T, U> = {
  // U を優先して { [K in keyof U]: U[K] } と考える
  // その上で T を付加する { [K in keyof T | keyof U]: ... }
  // K が keyof U である場合は U[K], K が keyof T である場合は T[K] それ以外は never となる
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never
}
type cases_599 = Expect<
  Equal<
    Merge<{ foo: 'a'; bar: 1 }, { bar: 'str'; baz: 1 }>,
    { foo: 'a'; bar: 'str'; baz: 1 }
  >
>
