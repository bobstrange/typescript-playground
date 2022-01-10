import { Expect, Equal } from '@type-challenges/utils'

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type case_04 = [
  Expect<
    Equal<
      MyPick<
        {
          title: string
          description: string
          completed: boolean
        },
        'title' | 'completed'
      >,
      { title: string; completed: boolean }
    >
  >
]
