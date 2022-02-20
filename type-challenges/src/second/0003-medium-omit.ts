import { Equal, Expect } from '@type-challenges/utils'

type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
/**
 * mapped types の中で key remapping をして、keyof T の型を制限する
 * key remapping in mapped types
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types
 */

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
