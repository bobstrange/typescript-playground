import { Alike, Expect } from '@type-challenges/utils'

// eslint-disable-next-line @typescript-eslint/ban-types
type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>
  get(): T
}

/**
 * はじめに option の型情報を取得する為に、
 * option(key: string, value: any): any から型情報を取得できるようにする
 * option<K, V>(key: K, value: V): any
 *
 * 次に、option が呼ばれるたびに型を貯めるための型引数を追加する
 * type Chainable<T = {}> = {
 * ...
 *
 * 最後に option の戻り値を Chainable にして、option の引数の情報を型引数に追加する
 * option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>
 *
 * K を index signature のキーにするする必要があるので、 extends string で制約を加える
 */
declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  .option('name', 'last name')
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}
