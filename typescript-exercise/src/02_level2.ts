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

/**
 * Property omit
 */

declare function addEventListener(
  type: string,
  handler: () => {},
  options?: boolean | { [k in "capture" | "once" | "passive"]: boolean }
): void

addEventListener("foobar", () => {})
addEventListener("event", () => {}, true)
addEventListener("event2", () => {}, {})
addEventListener("event3", () => {}, {
  capture: true,
  once: false,
})

// @ts-expect-error
addEventListener("foobar", () => {}, "string")
// @ts-expect-error
addEventListener("hoge", () => {}, {
  capture: true,
  once: false,
  excess: true,
})

/**
 * Intersection Type
 */
function giveId<T extends object>(obj: T): T & { id: string } {
  const id = "xxx"
  return {
    ...obj,
    id,
  }
}

const obj1: { id: string; foo: number } = giveId({ foo: 123 })
const obj2: { id: string; num: number; hoge: boolean } = giveId({
  num: 0,
  hoge: true,
})

// @ts-expect-error
const obj3: { id: string; piyo: string } = giveId({
  foo: "bar",
})

type StateUpdateArg<T> = T | ((oldValue: T) => T)
declare function useState<T>(
  initialValue: T
): [T, (setter: StateUpdateArg<T>) => void]

const [numState, setNumState] = useState(0)

setNumState(5)
setNumState((state) => state + 10)

// @ts-expect-error
setNumState("test")
