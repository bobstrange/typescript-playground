import { Expect, Equal } from '@type-challenges/utils'

// Union をどうやって受ければ良いのかがわからない、、、
// しかたが無いので回答例を見る
// https://github.com/type-challenges/type-challenges/issues/614

/**
 * Union を loop する方法
 */

type LoopUnion_296<
  Union extends string,
  Item extends string = Union
> = Item extends Item ? `loop ${Item}` : never

type ResultLoopUnion_296 = Expect<
  Equal<LoopUnion_296<'a' | 'b' | 'c'>, 'loop a' | 'loop b' | 'loop c'>
>

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never

type cases_296 = [
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
  >
]
