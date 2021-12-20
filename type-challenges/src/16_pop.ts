import { Expect, Equal } from '@type-challenges/utils'

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type Pop<T extends unknown[]> = T extends [...infer U, infer V] ? U : never
type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type cases_16 = [
  Expect<Equal<re1, ['a', 'b', 'c']>>,
  Expect<Equal<re2, [3, 2]>>
]
