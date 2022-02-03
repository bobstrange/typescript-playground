import { Expect, Equal } from '@type-challenges/utils'

// Uppercase 使っていいよね？
// 使わない場合はどうやって Capital にするのかがわからぬ
type Capitalize1<T extends string> = T extends `${infer T}${infer U}`
  ? `${Uppercase<T>}${U}`
  : never
// Capitalize を使用してよければ ↓ でもよさげ
type Capitalize2<T extends string> = `${Capitalize<T>}`

type case_110 = [
  Expect<Equal<Capitalize1<'hello world'>, 'Hello world'>>,
  Expect<Equal<Capitalize2<'hello world'>, 'Hello world'>>
]
