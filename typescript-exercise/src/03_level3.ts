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
