import { Equal, Expect } from '@type-challenges/utils'

type TupleToUnion<T extends unknown[]> = T[number]
/**
 * 普通に lookup Type を使うだけ
 * T は [] であることが前提なので、制約を加える
 */

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
]
