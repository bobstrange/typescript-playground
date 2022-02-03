import { Expect, Equal } from '@type-challenges/utils'

// distributive conditional types の性質上
// TypeScript は `never` を空の union として扱う
// ref: https://github.com/type-challenges/type-challenges/issues/614
type IsNever<T> = [T] extends [never] ? true : false

type cases_1042 = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<number>, false>>
]
