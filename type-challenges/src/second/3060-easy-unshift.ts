import { Equal, Expect } from '@type-challenges/utils'

type Unshift<T extends unknown[], U> = [U, ...T]

type cases_3060 = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>
]
