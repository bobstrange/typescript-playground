import { Expect, Equal } from '@type-challenges/utils'

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer First}${From}${infer Rest}` ? `${First}${To}${Rest}` : S

// First とか Rest とかが '' になるパターンこれで対応できてるか？
type case_116 = [
  Expect<
    Equal<Replace<'types are fun!', 'fun', 'awesome'>, 'types are awesome!'>
  >,
  Expect<
    Equal<
      Replace<'types are fun!', 'types are', 'TypeScript is'>,
      'TypeScript is fun!'
    >
  >,
  Expect<
    Equal<
      Replace<'types are fun!', 'fun!', 'interesting?'>,
      'types are interesting?'
    >
  >
]
