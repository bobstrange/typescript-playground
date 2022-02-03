import { Expect, Equal } from '@type-challenges/utils'

// スペースを含む場合、` ${infer U}` に合致したら、再帰的に TrimLeft を呼べば良い
type TrimLeft<T extends string> = T extends ` ${infer U}` ? TrimLeft<U> : T
type cases_106 = Expect<Equal<TrimLeft<'  Hello World  '>, 'Hello World  '>>
