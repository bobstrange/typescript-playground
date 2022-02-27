/**
 * 1-1 関数の型
 */
function isPositive(num: number): boolean {
  return num >= 0
}

// 使用例
isPositive(3)

// @ts-expect-error 引数は number であるべき
isPositive('123')

// @ts-expect-error isPositive の戻り値の型 boolean は number に assign できない
const numVar: number = isPositive(-5)

/**
 * オブジェクトの型
 */

interface User {
  name: string
  age: number
  private: boolean
}

function showUserInfo(user: User) {
  console.log(user)
}

// 使用例
showUserInfo({
  name: 'John Smith',
  age: 16,
  private: false,
})

// @ts-expect-error age は必須
showUserInfo({
  name: 'Mary Sue',
  private: false,
})

// @ts-expect-error private は必須
const user: User = {
  name: 'Gombe Nanashino',
  age: 100,
}

/**
 * 1-3 関数の型
 */

interface IsPositiveFunc {
  (num: number): boolean
}
const isPositive2: IsPositiveFunc = (num) => num >= 0

// 使用例
isPositive2(5)

// @ts-expect-error 引数は number であるべき
isPositive2('foo')
// @ts-expect-error 戻り値は boolean なので number には assign できない
const res2: number = isPositive2(123)

/**
 * 1-4 配列の型
 */

function sumOfPos(arr: number[]): number {
  return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0)
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0])

// @ts-expect-error 引数は number[] であるべき
sumOfPos(123, 456)
// @ts-expect-error 引数は number[] であるべき
sumOfPos([123, 'foobar'])
