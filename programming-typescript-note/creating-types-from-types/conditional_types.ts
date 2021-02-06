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

// @ts-expect-error Type '"message"' cannot be used to index type T (T isn't known to have a property called 'message')
type ErrorMessageOf<T> = T['message']

// T の型を message という property を持つ型であると限定することによってエラーにならなくなる
type MessageOf<T extends { message: unknown }> = T['message']

interface IEmail {
  message: string
}

interface IDog {
  berk(): void
}

type EmailMessageContents = MessageOf<IEmail> // => string
// @ts-expect-error IDog は message というプロパティを持たないので、エラーになる
type ErrorDogMessageContents = MessageOf<IDog>

// Messageof の型引数にどんな型でも渡したい場合は、ConditionalType を使えば良い
type RefinedMessageOf<T> = T extends { message: unknown } ? T['message'] : never

type EmailMessageContents2 = RefinedMessageOf<IEmail> // -> string
type DogMessageContents = RefinedMessageOf<IDog> // -> never

type Flatten<T> = T extends any[] ? T[number] : T
type Str = Flatten<string[]> // -> type Str = string
type Num = Flatten<number> // -> type Num = number

type Flatten2<T> = T extends (infer U)[] ? U : T
