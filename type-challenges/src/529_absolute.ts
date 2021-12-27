import { Equal, Expect } from '@type-challenges/utils'

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer V}`
  ? V
  : `${T}`

type case_529 = Expect<Equal<Absolute<-100>, '100'>>
