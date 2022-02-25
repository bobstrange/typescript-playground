import { Equal, Expect } from '@type-challenges/utils'

type Permutation<T, Original = T> = [T] extends [never]
  ? []
  : T extends unknown
  ? [T, ...Permutation<Exclude<Original, T>>]
  : []
/**
 *
 * 考え方としては、distributive union で分配された各要素と、その要素以外の Permutation を組み合わせる
 * ことで、全ての要素を組み合わせることができる。
 * まず、never の場合は、distributive の振る舞いを止めたいので、[T] extends [never] とする。
 * そして、その後は union の distribute を行いたいので、T extends unknown とする。
 * このとき T は、union の中の 1 つの要素を表しているので、第二型引数に元の Union を保持しておく
 */

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<
    Equal<
      Permutation<'A' | 'B' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<
    Equal<
      Permutation<'B' | 'A' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<Equal<Permutation<never>, []>>
]
