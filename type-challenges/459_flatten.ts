import { Expect, Equal } from '@type-challenges/utils'

type Flatten<T> = T extends any[]
  ? T extends []
    ? []
    : T extends [infer F]
    ? [...Flatten<F>]
    : T extends [infer F, ...infer R]
    ? [...Flatten<F>, ...Flatten<R>]
    : never
  : [T]

type cases_459 = [
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>
]
