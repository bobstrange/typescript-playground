type Sum = (...args: number[]) => number

const sum: Sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0)
}

type User = {
  name: string
  isAdmin: boolean
}

type CreateUser = (name: string, isAdmin: boolean) => User

const createUser: CreateUser = (name, admin) => {
  return {
    name,
    isAdmin: admin,
  }
}

type FetchUser = (name: string) => Promise<User | undefined>

const fetchUser: FetchUser = async (name) => {
  const users: User[] = []
  return users.find((u) => u.name === name)
}

type CreateElement = {
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas'): HTMLCanvasElement
  (tag: 'table'): HTMLTableElement
  (tag: string): HTMLElement
}
function createElement(tag: 'a'): HTMLAnchorElement
function createElement(tag: string): HTMLElement {
  return new HTMLElement()
}

type FilterA = <T>(arg: T[], filterFunc: (item: T) => boolean) => T[]
type FilterB<T> = <T>(arg: T[], filterFunc: (item: T) => boolean) => T[]

function map<T, U>(arr: T[], mapFunc: (item: T) => U): U[] {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = mapFunc(arr[i])
  }
  return result
}

const promise = new Promise((resolve) => resolve(100))

promise.then((d) => d ** 2)
