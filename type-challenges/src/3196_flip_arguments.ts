import { Expect, Equal } from '@type-challenges/utils'

type ReverseArgs<T> = T extends [infer First, ...infer Rest]
  ? [...ReverseArgs<Rest>, First]
  : []

type FlipArguments<T> = T extends (...args: infer Args) => infer Return
  ? (...args: ReverseArgs<Args>) => Return
  : never

type case_3196 = [
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >,
  Expect<Equal<FlipArguments<() => string>, () => string>>
]
