import { Equal, Expect } from '@type-challenges/utils'

type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer R
  ? (...args: [...Args, A]) => R
  : Fn
/**
 * まず、渡された Fn の引数と、戻り値の型を infer で取得する
 * 引数が何個かは不定なので spread parameter を使って推論する
 * Fn extends (...args: infer Args) => infer R
 * あとは、 Tuple の Args と A を Variadic Tuple Types で結合すれば良い
 */

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>]
