interface IAnimal {
  live(): void
}

interface IDog extends IAnimal {
  woof(): void
}

type Foo = IDog extends IAnimal ? number : string // -> number

type Bar = Error extends IAnimal ? number : string // -> string

interface IDLabel {
  id: number
}

interface NameLabel {
  name: string
}

function createLabel(id: number): IDLabel
function createLabel(name: string): NameLabel
function createLabel(nameOrID: string | number): IDLabel | NameLabel
function createLabel(nameOrID: string | number): IDLabel | NameLabel {
  throw 'unimplemented'
}

type NameOrID<T extends number | string> = T extends number
  ? IDLabel
  : NameLabel

function refinedCreateLabel<T extends number | string>(input: T): NameOrID<T> {
  throw 'unimplemented'
}
