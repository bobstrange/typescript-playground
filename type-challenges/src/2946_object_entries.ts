import { Equal, Expect } from '@type-challenges/utils'

type ObjectEntries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]

type case_2946 = Expect<
  Equal<
    ObjectEntries<{
      name: string
      age: number
      locations: string[] | null
    }>,
    ['name', string] | ['age', number] | ['locations', string[] | null]
  >
>
