import { Equal, Expect } from '@type-challenges/utils'

// String を再帰的に、型引数 U のタプルに入れていく
// 型引数 U が空配列の場合は、 '' にして、そうでない場合は、U[number] でタプルから union にする
type StringToUnion<
  S extends string,
  U extends string[] = []
> = S extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, [...U, First]>
  : U extends []
  ? ''
  : U[number]

type case_531 = [
  Expect<Equal<StringToUnion<'123'>, '1' | '2' | '3'>>,
  Expect<Equal<StringToUnion<''>, ''>>
]
