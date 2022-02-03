import { Expect, Equal } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

type PartialByKeys<T, S = keyof T> = {
  [K in keyof T as K extends S ? K : never]?: T[K]
} & {
  [K in keyof T as K extends S ? never : K]: T[K]
}

type cases_2757 = Expect<
  Equal<
    PartialByKeys<User, 'name'>,
    { name?: string; age: number; address: string }
  >
>
