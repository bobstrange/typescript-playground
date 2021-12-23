import { Expect, Equal } from '@type-challenges/utils'

type Capitalize<T extends string> = T extends `${infer T}${infer U}`
  ? `${Uppercase<T>}${U}`
  : never
type Hogehoge = Capitalize<'hogehoge'>
type case_110 = Expect<Equal<Capitalize<'hello world'>, 'Hello world'>>
