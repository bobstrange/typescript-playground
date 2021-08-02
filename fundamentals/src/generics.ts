function resolveOrTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const task = setTimeout(() => reject(new Error('Timed out!')), timeout)

    promise.then((val) => {
      clearTimeout(task)
      resolve(val)
    })
  })
}

resolveOrTimeout(fetch('https://google.co.jp'), 3000)

function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
  const out: { [k: string]: T } = {}
  array.forEach((val) => {
    out[val.id] = val
  })
  return out
}

const dict = arrayToDict([
  { id: 'a', name: 'b' },
  { id: 'c', name: 'd' },
])

dict.name
dict.bar
