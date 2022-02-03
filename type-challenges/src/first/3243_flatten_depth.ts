import { Expect, Equal } from '@type-challenges/utils'

type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [...First, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : []

type FlattenDepth<
  T extends unknown[],
  Depth extends number = 1,
  L extends number[] = []
> = Flatten<T> extends T
  ? T
  : L['length'] extends Depth
  ? T
  : FlattenDepth<Flatten<T>, Depth, [...L, 1]>

type cases_3243 = [
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>
]
