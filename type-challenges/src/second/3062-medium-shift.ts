import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Shift<T> = T extends [infer First, ...infer Rest] ? Rest : never

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>
]
