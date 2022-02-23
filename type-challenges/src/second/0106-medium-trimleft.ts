import { Equal, Expect } from '@type-challenges/utils'
type SpaceLike = ' ' | '　' | '\t' | '\n' | '\r'
type TrimLeft<S extends string> = S extends `${SpaceLike}${infer Rest}`
  ? TrimLeft<Rest>
  : S
/**
 * スペースとそれ以外の条件で合致したら再帰的に TrimLeft の型引数に渡すようにすれば良い
 * TrimLeft<S extends string> = S extends ` ${infer Rest}` ? TrimLeft<Rest> : S
 * テストケースには、 \n \t などもあるので、 extends `${' ' | '\t' }${infer Rest}` のようにすれば良い
 */
type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>
]
