import { Expect, Equal } from '@type-challenges/utils'

type Foo = {
  [key: string]: any
  hoge: number
  foo(): void
}

type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K]
}

type cases_1367 = Expect<
  Equal<RemoveIndexSignature<Foo>, { foo(): void; hoge: number }>
>
