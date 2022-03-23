import { Equal, Expect } from '@type-challenges/utils'

type Tuple<L extends number, T extends unknown[] = []> = T['length'] extends L
  ? T
  : Tuple<L, [...T, unknown]>
type MinusOne<T extends number> = Tuple<T> extends [...infer L, unknown]
  ? L['length']
  : never

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
]
