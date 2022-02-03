import { Expect, Equal } from '@type-challenges/utils'

type First<T> = T extends [infer U, ...unknown[]] ? U : never

type cases_0014 = [
  Expect<Equal<First<['a', 'b', 'c']>, 'a'>>,
  Expect<Equal<First<[1, 2, 3]>, 1>>
]
