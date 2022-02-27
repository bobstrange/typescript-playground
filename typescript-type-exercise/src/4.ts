export {}

/**
 * 4-1. 無い場合はunknown
 */

function getFoo<T>(obj: { foo?: T } & Record<string, unknown>) {
  return obj.foo
}

// 使用例
// numはnumber型
const num = getFoo({
  foo: 123,
})
// strはstring型
const str = getFoo({
  foo: 'hoge',
  bar: 0,
})
// unkはunknown型
const unk = getFoo({
  hoge: true,
})

// @ts-expect-error 123 は object ではない
getFoo(123)
// @ts-expect-error null は object ではない
getFoo(null)

/**
 * 4-1. プロパティを上書きする関数
 */

function giveId<T>(obj: T): Omit<T, 'id'> & { id: string } {
  const id = 'some str'
  return {
    ...obj,
    id,
  }
}

// 使用例
/*
 * obj1の型は { foo: number; id: string } 型
 */
const obj1 = giveId({ foo: 123 })
/*
 * obj2の型は { num : number; id: string } 型
 */
const obj2 = giveId({
  num: 0,
  id: 100,
})
// obj2のidはstring型なので別の文字列を代入できる
obj2.id = ''

/**
 * 4-3. unionは嫌だ
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

type Distribute<T> = T extends any ? T[] : never
type NotDistribute<T> = [T] extends [any] ? T[] : never
type IsUnion<T> = NotDistribute<T> extends Distribute<T> ? false : true

class EventDischarger<E> {
  emit<Ev extends keyof E>(
    eventName: Ev,
    payload: Ev extends IsUnion<Ev> ? never : E[Ev]
  ) {
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

// エラー例
ed.emit<'start' | 'stop'>('stop', {
  user: 'user1',
})
