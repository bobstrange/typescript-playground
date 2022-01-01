import { Expect, Equal } from '@type-challenges/utils'

type PickByType<T, U> = {
  // ↓だと、key が 残って never になってしまう
  // [K in keyof T]: T[K] extends U ? K : never
  // Index signature の部分で never にすれば Ok
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}

type case_2595 = Expect<
  Equal<
    PickByType<
      {
        name: string
        count: number
        isReadonly: boolean
        isEnable: boolean
      },
      boolean
    >,
    { isReadonly: boolean; isEnable: boolean }
  >
>
