import { Equal, Expect } from '@type-challenges/utils'

type PlusMinus = '+' | '-'
type Unit = '%'

type PercentageParser<T extends string> =
  T extends `${PlusMinus}${infer Num}${Unit}`
    ? T extends `${infer Sign}${Num}${Unit}`
      ? [Sign, Num, Unit]
      : never
    : T extends `${infer Num}${Unit}`
    ? ['', Num, Unit]
    : T extends `${infer Num}`
    ? ['', Num, '']
    : ['', '', '']

type cases_1978 = [
  Expect<Equal<PercentageParser<''>, ['', '', '']>>,
  Expect<Equal<PercentageParser<'+85%'>, ['+', '85', '%']>>,
  Expect<Equal<PercentageParser<'-85%'>, ['-', '85', '%']>>,
  Expect<Equal<PercentageParser<'85%'>, ['', '85', '%']>>,
  Expect<Equal<PercentageParser<'85'>, ['', '85', '']>>
]
