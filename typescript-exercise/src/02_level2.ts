/**
 * Generics
 */

function myFilter<T>(arr: T[], predicate: (k: T) => boolean) {
  const result = []
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item)
    }
  }
  return result
}

const data1 = myFilter<number>([1, 2, 3, 4, 5], (num) => {
  return num % 2 === 0
})

const data2 = myFilter<string>(["John", "Paul", "Smith"], (name) => {
  return name.length > 4
})

myFilter([1, 2, 3], (str) => {
  // @ts-expect-error
  return str.length > 3
})

/**
 * Union Type
 */

type Speed = "slow" | "medium" | "fast"

function getSpeed(speed: Speed): number {
  switch (speed) {
    case "slow":
      return 10
    case "medium":
      return 50
    case "fast":
      return 100
    default:
      const value: never = speed
      return value
  }
}
