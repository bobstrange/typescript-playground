import { Equal, Expect } from '@type-challenges/utils'

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S
/**
 * まずは、 S extends `${infer L}${From}${infer R}` の場合に From を To に置き換えるようにする
 * このままだと From が '' の場合に、想定通りに動かないので、From が '' の場合は何も変換しないようにする
 */
type hoge = Replace<'foobarbar', '', 'foo'>
type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>
]
