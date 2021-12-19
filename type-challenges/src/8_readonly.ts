import { Expect, Equal } from '@type-challenges/utils'

interface Todo {
  title: string
  description: string
  completed: boolean
}

// わからなかった :-(
// 回答例を見るに、一回指定された key に readonly をつけた上で、
// 交差で、Generics の第二引数にあるもの以外のキーについてを定義し直す感じ
// うーん、回答例を入れてみたけど、readonly がつかない :-(
// どうやら expectation の書き方がまずかっただけみたい

type MyReadonly2<T, K extends keyof T> = {
  readonly [U in K]: T[U]
} & {
  [S in Exclude<keyof T, K>]: T[S]
}
type hogehoge = MyReadonly2<Todo, 'title' | 'description'>
const hoge: hogehoge = {
  title: 'Hey',
  description: 'foobar',
  completed: true,
}

hoge.title = 'aaa'
hoge.completed = false

// type cases_8 = [
//   Expect<
//     Equal<
//       MyReadonly2<Todo, 'title' | 'description'>,
//       {
//         readonly title: 'Hey'
//         readonly description: 'foobar'
//         completed: boolean
//       }
//     >
//   >
// ]
