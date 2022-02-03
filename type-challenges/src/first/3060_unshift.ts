import { Equal, Expect } from '@type-challenges/utils'

type Unshift<T extends any[], U> = [U, ...T]

type cases_3060 = [Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>]
