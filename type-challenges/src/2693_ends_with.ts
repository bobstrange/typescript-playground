import { Equal, Expect } from '@type-challenges/utils'

type EndsWith<T extends string, U extends string> = T extends `${any}${U}`
  ? true
  : false

type cases_2693 = [
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'babc'>, false>>
]
