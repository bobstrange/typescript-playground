import { Expect, Equal } from '@type-challenges/utils'

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer First}${From}${infer Rest}`
  ? `${First}${To}${Rest}`
  : S

// First とか Rest とかが '' になるパターンこれで対応できてるか？
// 回答例見たら、 From が '' になるケース漏れてた
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
  >,
  Expect<Equal<Replace<'types are fun!', '', 'fun?'>, 'types are fun!'>>
]
