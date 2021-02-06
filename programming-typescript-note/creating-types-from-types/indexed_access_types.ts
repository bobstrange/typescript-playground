interface IPerson {
  name: string
  age: number
  alive: boolean
}

type PersonAgeType = IPerson['age'] // number

type AgeOrNameType = IPerson['age' | 'name'] // string | number
type PersonKey = IPerson[keyof IPerson] // string | Number | boolean
type AliveOrName = 'alive' | 'name'
type AliveOrNameType = IPerson[AliveOrName] // string | boolean

const personArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
]

type IPerson2 = typeof personArray[number]
type AgeType = typeof personArray[number]['age']

type UserContainer = {
  [k: string]: {
    name: string
    age: number
  }
}

type MyUser = UserContainer[string]
