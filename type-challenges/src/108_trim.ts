import { Expect, Equal } from '@type-challenges/utils'

// TrimLeft と同様に、スペースを含む場合、` ${infer U}` に合致したら、再帰的に Trim を呼べば良い
// さらに、右側のスペースについても同様にすれば良い
type Trim<T extends string> = T extends ` ${infer U}`
  ? Trim<U>
  : T extends `${infer U} `
  ? Trim<U>
  : T
type case_108 = Expect<Equal<Trim<'  Hello World  '>, 'Hello World'>>
