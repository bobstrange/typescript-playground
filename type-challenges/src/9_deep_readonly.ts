import { Expect, Equal } from '@type-challenges/utils'

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
  aaa: (a: string) => void
}

// Primitive などの場合と object の場合を分ける必要があった、、、
type Primitive = number | string | boolean | bigint | symbol | undefined | null
// eslint-disable-next-line @typescript-eslint/ban-types
type Builtin = Primitive | Function | Date | Error | RegExp

type DeepReadonly<T> = T extends Builtin
  ? T
  : T extends object
  ? { readonly [U in keyof T]: DeepReadonly<T[U]> }
  : never

type Expected_9 = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
  readonly aaa: (a: string) => void
}
type Actual_9 = DeepReadonly<X>

type cases_9 = [Expect<Equal<DeepReadonly<X>, Expected_9>>]
