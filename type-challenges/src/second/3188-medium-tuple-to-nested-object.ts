import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? F extends string
    ? { [K in F]: TupleToNestedObject<R, U> }
    : never
  : U

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<['a', 'b', 'c'], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
]
