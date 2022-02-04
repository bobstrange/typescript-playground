import { Expect, Equal } from '@type-challenges/utils'

// type Concat<L, R> = L extends unknown[]
//   ? R extends unknown[]
//     ? [...L, ...R]
//     : never
//   : never

type Concat<L extends unknown[], R extends unknown[]> = [...L, ...R]
/**
 * 型引数の定義の時点で、L も R もtuple で有ることを明示した方が良い
 * 右辺では、tuple の spread operator で結合する
 */

type cases_0533 = [
  Expect<Equal<Concat<[1], [2]>, [1, 2]>>,
  Expect<Equal<Concat<[1, 2], [3, 4, 5]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Concat<[1, 2], ['a', 'b']>, [1, 2, 'a', 'b']>>
]
