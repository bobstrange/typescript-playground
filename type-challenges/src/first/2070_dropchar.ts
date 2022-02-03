import { Expect, Equal } from '@type-challenges/utils'

type DropChar<
  S extends string,
  R extends string
> = S extends `${infer First}${R}${infer Rest}`
  ? DropChar<`${First}${Rest}`, R>
  : S

type case_2070 = Expect<
  Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>
>
