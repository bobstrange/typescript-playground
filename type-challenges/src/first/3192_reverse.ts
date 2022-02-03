import { Expect, Equal } from '@type-challenges/utils'

type Reverse<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T

type cases_3192 = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]
