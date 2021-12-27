import { Equal, Expect } from '@type-challenges/utils'

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
