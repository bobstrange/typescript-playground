/**
 * Parameters ってなんだっけ？
 * ref
 */
// Parameters ってなんだっけ？
// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
// 引数の型を tuple で抽出

import { Expect, Equal } from '@type-challenges/utils'

declare function f(arg: { a: number; b: string }): void

type T3312_0 = Parameters<typeof f>
type T3312_1 = Parameters<(a: string, b: number) => void>

type ex_3312 = [
  Expect<Equal<T3312_0, [{ a: number; b: string }]>>,
  Expect<Equal<T3312_1, [string, number]>>
]

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never

type cases_3312 = [
  Expect<Equal<MyParameters<typeof f>, [{ a: number; b: string }]>>,
  Expect<
    Equal<MyParameters<(a: string, b: number) => void>, [a: string, b: number]>
  >
]
