import { Equal, Expect } from '@type-challenges/utils'

type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never

/**
 * String をループさせて、1 文字ずつ取得して、 union の左辺にする
 * 残りについては、再帰的に StringToUnion を呼び出す
 */

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<
      StringToUnion<'coronavirus'>,
      'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
    >
  >
]
