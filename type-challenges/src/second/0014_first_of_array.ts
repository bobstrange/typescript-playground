import { Expect, Equal } from '@type-challenges/utils'

type First<T extends unknown[]> = T extends [infer U, ...unknown[]] ? U : never
// type First<T extends unknown[]> = T[0]

/**
 * 名前が First なので、型引数は unknown 型 Array Like であることを明示
 * 型引数に Array Like 以外が渡されたら、型チェックでエラーになるから右辺は、 T[0] だけで良いかも
 */

type cases_0014 = [
  Expect<Equal<First<['a', 'b', 'c']>, 'a'>>,
  Expect<Equal<First<[1, 2, 3]>, 1>>,
  Expect<Equal<First<['aa', 11, 'c']>, 'aa'>>
]
