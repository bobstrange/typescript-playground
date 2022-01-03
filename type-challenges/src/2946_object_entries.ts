import { Equal, Expect } from '@type-challenges/utils'

// type ObjectEntries<T> = {
//   [K in keyof T]: [K, T[K]]
// }[keyof T]

// index signature を使わなくても、K を Generics の第二引数に指定して
// K extends keyof T で、K の型を解決できる
type ObjectEntries<T, K = keyof T> = K extends keyof T ? [K, T[K]] : never

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
