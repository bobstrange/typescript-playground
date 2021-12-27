import { Equal, Expect } from '@type-challenges/utils'

// T が string の場合もあるので、T extends '-{infer V}` ではなく、`${T} extends `-${infer V}` とする
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer V}`
  ? V
  : `${T}`

type case_529 = Expect<Equal<Absolute<-100>, '100'>>
