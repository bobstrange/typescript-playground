import { HasEmail } from './types'

// builtin

const myUnknown: unknown = 'Unknown, Unknown2'

if (typeof myUnknown === 'string') {
  myUnknown.split(', ')
}
if (myUnknown instanceof Promise) {
  myUnknown.then((x) => console.log(x))
}

// user-defined type guards

function isHasEmail(x: any): x is HasEmail {
  return typeof x.name === 'string' && typeof x.email === 'string'
}

// useful type guards
function isDefined<T>(arg: T | undefined): arg is T {
  return typeof arg !== 'undefined'
}

const list = ['a', 'b', 'c', undefined, 'e']
const filtered = list.filter(isDefined)

// 区別可能な unknown として、↓のように書ける

interface BrandedA {
  __this_is_branded_with_a: 'a'
}

function brandA(value: string): BrandedA {
  return value as unknown as BrandedA
}

function unbrandA(value: BrandedA): string {
  return value as unknown as string
}

interface BrandedB {
  __this_is_branded_with_b: 'b'
}

function brandB(value: number): BrandedB {
  return value as unknown as BrandedB
}

function unbrandB(value: BrandedB): number {
  return value as unknown as number
}

let val1 = brandA('This is a secret value')
const val2 = brandB(1234343414)

// @ts-expect-error BrandedA と BrandedB のインターフェースが異なるため、このように書けない
val1 = val2

// never
// narrowing exhaustively

const x = 'abc' as string | number

if (typeof x === 'string') {
  // x is string
} else if (typeof x === 'number') {
  // x is number
} else {
  x
  // x is never
}

class UnreachableError extends Error {
  constructor(value: never, message: string) {
    super(`We could never end up here ${message}`)
  }
}

const y = 'abc' as string | number | boolean

if (typeof y === 'string') {
  // x is string
} else if (typeof y === 'number') {
  // x is number
} else {
  // @ts-expect-error y === 'boolean' のケースを handle していないので、UnreachableError のコンストラクタで、型エラーを検出してくれる
  throw new UnreachableError(y, 'y should be a string or number')
}
