/**
 * 3-1 配列から Map を作る
 */

function mapFromArray<T extends Record<string, unknown>, K extends keyof T>(
  arr: T[],
  key: K
): Map<T[K], T> {
  const result = new Map()
  for (const obj of arr) {
    result.set(obj[key], obj)
  }
  return result
}

// 使用例
const data = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Mary Sue' },
  { id: 100, name: 'Taro Yamada' },
]
const dataMap = mapFromArray(data, 'id')
/*
dataMapは
Map {
  1 => { id: 1, name: 'John Smith' },
  2 => { id: 2, name: 'Mary Sue' },
  100 => { id: 100, name: 'Taro Yamada' }
}
というMapになる
*/

// @ts-expect-error 'age' は data のオブジェクトのキーに存在しない
mapFromArray(data, 'age')

/**
 * 3-2 Partial
 */

type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */
type T1 = MyPartial<{
  foo: number
  bar: string
}>
/*
 * T2は { hoge?: { piyo: number; } } となる
 */
type T2 = MyPartial<{
  hoge: {
    piyo: number
  }
}>

/**
 * 3-3 イベント
 */

interface EventPayloads {
  start: {
    user: string
  }
  stop: {
    user: string
    after: number
  }
  end: Record<string, never>
}

class EventDischarger<E> {
  emit<K extends keyof E>(eventName: K, payload: E[K]) {
    console.log(eventName, payload)
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>()
ed.emit('start', {
  user: 'user1',
})
ed.emit('stop', {
  user: 'user1',
  after: 3,
})
ed.emit('end', {})

ed.emit('start', {
  user: 'user2',
  // @ts-expect-error after は start イベントのペイロードのキーには存在しない
  after: 0,
})

// @ts-expect-error user は stop イベントのペイロードのキーには存在しない
ed.emit('stop', {
  user: 'user2',
})

// @ts-expect-error foobar イベントは存在しない
ed.emit('foobar', {
  foo: 123,
})

/**
 * 3-4 reducer
 */

type IncrementAction = { type: 'increment'; amount: number }
type DecrementAction = { type: 'decrement'; amount: number }
type ResetAction = { type: 'reset'; value: number }

type Action = IncrementAction | DecrementAction | ResetAction
const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'increment':
      return state + action.amount
    case 'decrement':
      return state - action.amount
    case 'reset':
      return action.value
  }
}

// 使用例
reducer(100, {
  type: 'increment',
  amount: 10,
}) === 110
reducer(100, {
  type: 'decrement',
  amount: 55,
}) === 45
reducer(500, {
  type: 'reset',
  value: 0,
}) === 0

reducer(0, {
  type: 'increment',
  // @ts-expect-error increment の payload は amount
  value: 100,
})

/**
 * 3-5 undefined な引数
 */

type Func<A, R> = undefined extends A ? (arg?: A) => R : (arg: A) => R

// 使用例
const f1: Func<number, number> = (num) => num + 10
const v1: number = f1(10)

const f2: Func<undefined, number> = () => 0
const v2: number = f2()
const v3: number = f2(undefined)

const f3: Func<number | undefined, number> = (num) => (num || 0) + 10
const v4: number = f3(123)
const v5: number = f3()

// エラー例
const v6: number = f1()
