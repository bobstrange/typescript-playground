/**
 * Add type to function
 */

function isPositive(num: number) {
  return num >= 0
}

isPositive(1)
// @ts-expect-error
isPositive("123")
// @ts-expect-error
const num: number = isPositive(1)

/**
 * Define object type
 */
function showUserInfo(user: User) {
  console.log(`name: ${user.name} age: ${user.age}`)
}

type User = {
  name: string
  age: number
  private: boolean
}

showUserInfo({ name: "John Doe", age: 20, private: true })
// @ts-expect-error
showUserInfo({ name: "Jane Doe" })
// @ts-expect-error
const user: User = { name: "Jane doe", invalid: true }

/**
 * Define function type
 */

type IsNegativeFunc = (k: number) => boolean

const isNegative: IsNegativeFunc = (num) => {
  return num < 0
}

isNegative(5)
// @ts-expect-error
isNegative("test")
// @ts-expect-error
const testNumber: number = isNegative(1)

/**
 * Define Array Type
 */

function sumOfPos(arr: number[]) {
  return arr
    .filter((num) => {
      return num >= 0
    })
    .reduce((acc, cur) => {
      return acc + cur
    }, 0)
}

sumOfPos([1, 2, 3])
// @ts-expect-error
sumOfPos(111, 222)
// @ts-expect-error
sumOfPos([1, "2", true])
