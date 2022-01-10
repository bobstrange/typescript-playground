import { Expect, Equal } from '@type-challenges/utils'

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

type case_08 = Expect<
  Equal<
    MyReadonly<{ title: string; description: string }>,
    { readonly title: string; readonly description: string }
  >
>
