/* eslint-disable @typescript-eslint/no-empty-function */
export {}

/**
 *  2-1 ジェネリクス
 */
function myFilter<T>(arr: T, predicate: (arg: T) => boolean) {
  const result = []
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm)
    }
  }
  return result
}

// 使用例
const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0)
const res2 = myFilter(['foo', 'hoge', 'bar'], (str) => str.length >= 4)

// エラー例
myFilter([1, 2, 3, 4, 5], (str) => str.length >= 4)

/**
 * 2-2 いくつかの文字列を受け取れる関数
 */

type Speed = 'slow' | 'medium' | 'fast'

function getSpeed(speed: Speed): number {
  switch (speed) {
    case 'slow':
      return 10
    case 'medium':
      return 50
    case 'fast':
      return 200
  }
}

// 使用例
const slowSpeed = getSpeed('slow')
const mediumSpeed = getSpeed('medium')
const fastSpeed = getSpeed('fast')

// @ts-expect-error "veryfast" は Speed には存在しない
getSpeed('veryfast')

/**
 * 2-3 省略可能なプロパティ
 */

type Option = {
  capture?: boolean
  once?: boolean
  excess?: boolean
}

declare function addEventListener(
  arg: string,
  fn: () => void,
  option?: boolean | Option
): void

// 使用例
addEventListener('foobar', () => {})
addEventListener('event', () => {}, true)
addEventListener('event2', () => {}, {})
addEventListener('event3', () => {}, {
  capture: true,
  once: false,
})

// @ts-expect-error 'string' は option に渡せない
addEventListener('foobar', () => {}, 'string')

/**
 * 2-4 プロパティを一つ増やす関数
 */

function giveId<T extends Record<string, unknown>>(obj: T): T & { id: string } {
  const id = 'some str'
  return {
    ...obj,
    id,
  }
}

// 使用例
const obj1: {
  id: string
  foo: number
} = giveId({ foo: 123 })
const obj2: {
  id: string
  num: number
  hoge: boolean
} = giveId({
  num: 0,
  hoge: true,
})

// @ts-expect-error foo のキーが無くて、piyo という謎のキーがある
const obj3: {
  id: string
  piyo: string
} = giveId({
  foo: 'bar',
})

/**
 * 2-5 useState
 */

declare function useState<T>(
  initialValue: T
): [T, (arg: T | ((oldValue: T) => void)) => void]

// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState, setNumState] = useState(0)
// setNumStateは新しい値で呼び出せる
setNumState(3)
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState((state) => state + 10)

// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState<number | null>(null)
setAnotherState(100)

// @ts-expect-error number 型ではない
setNumState('foobar')
