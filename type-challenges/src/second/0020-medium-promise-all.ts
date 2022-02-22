import { Equal, Expect } from '@type-challenges/utils'

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>

/**
 * まずシンプルに
 * declare function PromiseAll<T>(values: T): Promise<T>
 *
 * PromiseAll に渡されてくる引数が [1, 2, 3] as const などの場合
 * T は readonly [1, 2, 3] となる
 *
 * T から readonly を取り除くために、Variadic Tuples Types を使用する
 * declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<T>
 *
 * 次に、values に Promise が含まれる時に、中身の型を infer で取り出す
 *  declare function PromiseAll<T extends unknown[]>(
 *    values: readonly [...T]
 *  ): Promise<T extends Promise<infer R> ? R : T>
 *
 * T は Union ではなく、Tuple なので、T extends Promise<infer P> は必ず偽になる
 * そのため、T についてではなく、T の各要素について↑のように判定する
 * [P in keyof T]
 *
 *  declare function PromiseAll<T extends unknown[]>(
 *    values: readonly [...T]
 *  ): Promise<{ [P in keyof T] extends Promise<infer R> ? R : T[P] }>
 *
 */
const hoge = PromiseAll([1, 2, Promise.resolve(3)] as const)
type test = typeof hoge
const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
]
