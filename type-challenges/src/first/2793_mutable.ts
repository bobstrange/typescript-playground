import { Expect, Equal } from '@type-challenges/utils'

interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

type case_2793 = Expect<
  Equal<
    Mutable<Todo>,
    { title: string; description: string; completed: boolean }
  >
>
