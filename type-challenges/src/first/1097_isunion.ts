import { Equal, Expect } from '@type-challenges/utils'

type Distribute<T> = T extends any ? T[] : never
type NotDistribute<T> = [T] extends [any] ? T[] : never
type IsUnion<T> = NotDistribute<T> extends Distribute<T> ? false : true

// union の distribution 有りとなしで同じ型になったら union 以外、そうでなかったら union
// ref: https://github.com/type-challenges/type-challenges/issues/1141

type cases_1097 = [
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>
]
