import { Expect, Equal } from '@type-challenges/utils'

type StartsWith<T extends string, U extends string> = T extends `${U}${any}`
  ? true
  : false

type cases_2688 = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>
]
