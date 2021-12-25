import { Expect, Equal } from '@type-challenges/utils'

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer First}${From}${infer Rest}`
  ? `${ReplaceAll<First, From, To>}${To}${ReplaceAll<Rest, From, To>}`
  : s
type cases_119 = [Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>]
