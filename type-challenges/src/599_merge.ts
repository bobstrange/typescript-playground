import { Expect, Equal } from '@type-challenges/utils'

type Merge<T, U> = {
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
