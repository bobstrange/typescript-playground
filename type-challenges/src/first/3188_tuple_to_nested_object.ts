import { Expect, Equal } from '@type-challenges/utils'

type TupleToNestedObject<T, U> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? {
        [K in First]: TupleToNestedObject<Rest, U>
      }
    : never
  : U

type cases_3188 = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
]
