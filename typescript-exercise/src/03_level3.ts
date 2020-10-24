/**
 * Generics
 */
function mapFromArray<T, K extends keyof T>(array: T[], key: K): Map<T[K], T> {
  const result = new Map()
  for (const obj of array) {
    result.set(obj[key], obj)
  }
  return result
}

const data = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Mary Sue" },
  { id: 100, name: "Taro Yamada" },
]

mapFromArray(data, "id")
// @ts-expect-error
mapFromArray(data, "age")

/**
 * Implement Partial by myself
 */
type MyPartial<T extends object> = { [K in keyof T]?: T[K] }

type T1 = MyPartial<{
  foo: number
  bar: string
}>

type T2 = MyPartial<{
  hoge: {
    piyo: number
  }
}>

/**
 *
 */
interface EventPayloads {
  start: {
    user: string
  }
  stop: {
    user: string
    after: number
  }
  end: {}
}

class EventDischarger<E> {
  emit<K extends keyof E>(eventName: K, payload: E[K]) {}
}

// 使用例
const ed = new EventDischarger<EventPayloads>()
ed.emit("start", {
  user: "user1",
})
ed.emit("stop", {
  user: "user1",
  after: 3,
})
ed.emit("end", {})

ed.emit("start", {
  user: "user2",
  // @ts-expect-error
  after: 0,
})

// @ts-expect-error
ed.emit("stop", {
  user: "user2",
})

// @ts-expect-error
ed.emit("foobar", {
  foo: 123,
})

/**
 * Reducer
 */
type Action =
  | {
      type: "increment"
      amount: number
    }
  | {
      type: "decrement"
      amount: number
    }
  | {
      type: "reset"
      value: number
    }

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment": {
      return state + action.amount
    }
    case "decrement": {
      return state - action.amount
    }
    case "reset": {
      return action.value
    }
  }
}

/**
 * Conditional Types
 */

type Func<A, R> = undefined extends A ? (arg?: A) => R : (arg: A) => R

const f1: Func<number, number> = (num) => num + 10
const v1: number = f1(10)

const f2: Func<undefined, number> = () => 0
const v2: number = f2()
const v3: number = f2(undefined)

const f3: Func<number | undefined, number> = (num) => (num || 0) + 10
const v4: number = f3(123)
const v5: number = f3()

// @ts-expect-error
const v6: number = f1()
