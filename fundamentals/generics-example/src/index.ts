export type Dict<T> = {
  [k: string]: T | undefined
}

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, idx: number) => S
): Dict<S> {
  const out: Dict<S> = {}

  Object.keys(dict).forEach((dictKey, idx) => {
    const item = dict[dictKey]
    if (typeof item !== 'undefined') {
      out[dictKey] = fn(item, idx)
    }
  })

  return out
}

mapDict(
  {
    a: 'a',
    b: 'b',
  },
  (item, idx) => {
    return [item]
  }
)
mapDict(
  {
    a: 'a',
    b: 'b',
  },
  (item, idx) => {
    return { value: item, index: idx }
  }
)

// Array.prototype.reduce, but for Dict
export function reduceDict<T>(dict: Dict<T>) {
  const result: T[] = []

  Object.keys(dict).forEach((key) => {
    const item = dict[key]
    if (typeof item !== 'undefined') {
      result.push(item)
    }
  })

  return result
}

reduceDict({ a: 'a', b: 'b' })
