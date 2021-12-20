import { Expect, Equal } from '@type-challenges/utils'

// うーん、型引数を渡して、それにプロパティを追加していく形だと思うんだが
// 初期は何も渡していないということは、デフォルトの型は {} か
// option の戻り値の部分がわからなかったので回答例を参考にしたが、テストケースが通らない
type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [S in K]: V}>
  get: () => T
}

declare const config: Chainable

const result_12 = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Expected_12 {
  foo: number
  name: string
  bar: {
    value: string
  }
}

type Actual_12 = typeof result_12

type case_12 = Expect<Equal<Actual_12, Expected_12>
