import { Expect, Equal } from '@type-challenges/utils'

type Shift<T extends unknown[]> = T extends [unknown, ...infer U] ? U : never
type case_3062 = Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>
