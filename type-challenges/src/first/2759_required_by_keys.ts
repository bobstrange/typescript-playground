import { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

type RequiredByKeys<T, S = keyof T> = {
  [K in keyof T as K extends S ? K : never]-?: T[K]
} & {
  [K in keyof T as K extends S ? never : K]: T[K]
}

type case_2759 = Expect<
  Equal<
    RequiredByKeys<User, 'name'>,
    { name: string } & { age?: number; address?: string }
  >
>
