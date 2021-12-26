import { Expect, Equal } from '@type-challenges/utils'

// 配列だったら ['length'] で長さを取得できる
// String -> Array にするには
// Generics の第二引数を初期値空配列にして、一文字ずつ入れていけば良い
type Length<
  T extends string,
  U extends string[] = []
> = T extends `${infer First}${infer Rest}`
  ? Length<Rest, [...U, First]>
  : U['length']

type case_298 = [Expect<Equal<Length<''>, 0>>, Expect<Equal<Length<'test'>, 4>>]
