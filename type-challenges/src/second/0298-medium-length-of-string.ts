import { Equal, Expect } from '@type-challenges/utils'

type StringToTuple<S extends string> = S extends `${infer First}${infer Rest}`
  ? [First, ...StringToTuple<Rest>]
  : []
type LengthOfString<S extends string> = StringToTuple<S>['length']
/**
 *
 * String には 'length' プロパティが存在しないが、Tuple には存在するので、
 * String から Tuple に変換すれば良い
 * 1 文字ずつ再帰的に Tuple に入れていって最後に 'length' を取得すれば良い
 */

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]
