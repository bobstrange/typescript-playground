type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean
}

type FeatureFlags = {
  darkMode: () => void
  newUserProfile: () => void
}

type FeatureOptions = OptionsFlags<FeatureFlags>
// type FeatureOptions = {
//   darkMode: boolean
//   newUserProfile: boolean
// }

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type ImmutableUser = {
  readonly id: string
  readonly name: string
}

type MutableUser = CreateMutable<ImmutableUser>
// type MutableUser = {
//   id: string
//   name: string
// }

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

type OptionalUser = {
  id: string
  name?: string
  age?: number
}

type ConcreteUser = Concrete<OptionalUser>
// type ConcreteUser = {
//   id: string
//   name: string
//   age: number
// }
