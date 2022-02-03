import { Equal, Expect } from '@type-challenges/utils'

type OmitByType<T, S> = {
  [K in keyof T as T[K] extends S ? never : K]: T[K]
}

type case_2852 = Expect<
  Equal<
    OmitByType<
      {
        name: string
        count: number
        isReadonly: boolean
        isEnable: boolean
      },
      boolean
    >,
    { name: string; count: number }
  >
>
