import { Expect, Equal } from '@type-challenges/utils'

// Replace と同様に、 From が '' の場合は、型変換せず
// あとは、First と Rest で再帰的に ReplaceAll

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer First}${From}${infer Rest}`
  ? // ? `${ReplaceAll<First, From, To>}${To}${ReplaceAll<Rest, From, To>}`
    // First と Rest 両方で再帰的に ReplaceAll 読んでたけど、Rest の方だけで良いっぽい
    `${First}${To}${ReplaceAll<Rest, From, To>}`
  : S

type cases_119 = [Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>]
