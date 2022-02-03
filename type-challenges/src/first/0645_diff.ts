import { Expect, Equal } from '@type-challenges/utils'

type O_645_1 = {
  a: 'test'
  b: [1, 2, 3]
  c: {
    d: 'test'
  }
}

type O_645_2 = {
  a: 'test'
  b: [1, 2, 3, 4]
  e: 'test2'
}

type Expected_645 = {
  b: [1, 2, 3, 4]
  c: {
    d: 'test'
  }
  e: 'test2'
}

// これだと、b の差分が出てくれない
// [K in keyof T | keyof U] にして、never の値の key を除外できる？
// わからん、、、
type Diff<T, U> = {
  [K in
    | Exclude<keyof T, keyof U>
    | Exclude<keyof U, keyof T>]: K extends keyof T & keyof U
    ? T[K] extends U[K]
      ? never
      : U[K]
    : K extends keyof T
    ? T[K]
    : K extends keyof U
    ? U[K]
    : never
}

type case_645 = Expect<Equal<Diff<O_645_1, O_645_2>, Expected_645>>
