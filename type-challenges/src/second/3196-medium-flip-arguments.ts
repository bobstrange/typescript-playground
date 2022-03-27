import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Reverse<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T

type FlipArguments<T> = T extends (...args: infer Args) => infer R
  ? (...args: Reverse<Args>) => R
  : T

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
]
