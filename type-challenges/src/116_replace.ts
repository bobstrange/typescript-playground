import { Expect, Equal } from '@type-challenges/utils'

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer First}${From}${infer Rest}` ? `${First}${To}${Rest}` : S

type case_116 = Expect<
  Equal<Replace<'types are fun!', 'fun', 'awesome'>, 'types are awesome!'>
>
