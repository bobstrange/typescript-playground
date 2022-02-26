import { Equal, Expect } from '@type-challenges/utils'
type Flatten<T> = T extends []
  ? []
  : T extends [infer L, ...infer Rest]
  ? [...Flatten<L>, ...Flatten<Rest>]
  : [T]

/**
 * まず T = [] の場合 T extends [] ? [] : T
 */

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >
]
