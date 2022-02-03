import { Expect, Equal } from '@type-challenges/utils'

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type Last<T extends any[]> = T extends [...infer U, infer V] ? V : never
type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

type cases_15 = [
  Expect<Equal<Last<arr1>, tail1>>,
  Expect<Equal<Last<arr2>, tail2>>
]
