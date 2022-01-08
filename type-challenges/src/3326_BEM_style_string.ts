import { Expect, Equal } from '@type-challenges/utils'

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E['length'] extends 0 ? '' : `__${E[number]}`}${M['length'] extends 0
  ? ''
  : `--${M[number]}`}`

type case_3326 = [
  Expect<
    Equal<BEM<'block', ['element'], ['modifier']>, 'block__element--modifier'>
  >,
  Expect<Equal<BEM<'block', ['element'], []>, 'block__element'>>,
  Expect<Equal<BEM<'block', [], []>, 'block'>>
]
