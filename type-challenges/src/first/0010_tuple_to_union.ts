import { Expect, Equal } from '@type-challenges/utils'
type Arr_10 = ['1', '2', '3']

type TupleToUnion<T extends any[]> = T[number]

type Expected_10 = '1' | '2' | '3'
type Actual_10 = TupleToUnion<Arr_10>

type case_10 = Expect<Equal<Actual_10, Expected_10>>
