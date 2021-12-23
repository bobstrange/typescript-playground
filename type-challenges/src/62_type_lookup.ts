import { Expect, Equal } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Lookup<T, U extends string> = T extends { type: string }
  ? T['type'] extends U
    ? T
    : never
  : never

type case_62 = Expect<Equal<Lookup<Cat | Dog, 'dog'>, Dog>>
