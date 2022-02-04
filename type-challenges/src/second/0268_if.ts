import { Expect, Equal } from '@type-challenges/utils'

type If<C extends boolean, L, R> = C extends true ? L : R

type cases_0268 = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 'b'>, 'b'>>
]
