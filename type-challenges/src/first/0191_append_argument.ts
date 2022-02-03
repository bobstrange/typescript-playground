import { Expect, Equal } from '@type-challenges/utils'

type Fn = (a: number, b: string) => number

// type AppendArgument<F extends Function, T> = F extends (
//   ...args: infer U
// ) => infer R
//   ? // ...args を先に持っていきたいが、Rest parameter は最後にしないとダメ、、、
//     (c: T, ...args: U) => R
//   : never

// (...args: [...U, T]) 型の方でも、配列の展開が可能
type AppendArgument<Fn, T> = Fn extends (...args: infer U) => infer R
  ? (...args: [...U, T]) => R
  : never

type cases_191 = [
  Expect<
    Equal<
      AppendArgument<Fn, boolean>,
      (a: number, b: string, c: boolean) => number
    >
  >
]
// expected be (a: number, b: string, x: boolean) => number
