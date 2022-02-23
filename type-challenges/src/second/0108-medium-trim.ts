import { Equal, Expect } from '@type-challenges/utils'

type SpaceLike = ' ' | '　' | '\t' | '\n' | '\r'
type Trim<S extends string> = S extends `${SpaceLike}${infer T}`
  ? Trim<T>
  : S extends `${infer T}${SpaceLike}`
  ? Trim<T>
  : S

/**
 * 106-medium-trimleft と同様
 * TrimLeft と同様に書いて、左側の whitespace を取り除く
 * 今度は、右側も同様に取り除く
 * 残ったものが答え
 */
type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>
]
