import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Values<T> = T[keyof T]
type ObjectEntries<T> = Values<{
  [K in keyof T]-?: [K, Exclude<T[K], undefined>]
}>

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type hoge = ObjectEntries<Model>
type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>
]
