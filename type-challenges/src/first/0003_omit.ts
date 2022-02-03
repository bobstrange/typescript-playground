import { Expect, Equal } from '@type-challenges/utils'

interface Todo {
  title: string
  description: string
  completed: boolean
}

// Exclude を使えば簡単にできるが、、、
// type MyOmit<T, K extends keyof T> = {
//   [U in Exclude<keyof T, K>]: T[U]
// }

// Exclude の型定義 が↓だから、MyExclude を作るのか
type MyExclude<T, U> = T extends U ? never : T
type MyOmit<T, K extends keyof T> = {
  [U in MyExclude<keyof T, K>]: T[U]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

type case_3 = [Expect<Equal<TodoPreview, { completed: boolean }>>]
