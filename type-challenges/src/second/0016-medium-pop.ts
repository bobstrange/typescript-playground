import { Equal, Expect } from '@type-challenges/utils'

type Pop<T extends unknown[]> = T extends [...infer U, unknown] ? U : never
/**
 * こちらの問題も前の問題と同様に、Variadic Tuple Types https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
 * を使用するだけでよい
 */
type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>
]
