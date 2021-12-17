import { Equal, Expect } from '@type-challenges/utils'

// これだと、リテラル型になってしまうので、string 型として判定させたい...
// type Includes<T extends any[], U> = U extends keyof T ? true : false

type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

type cases_898 = [
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>
  >,
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'>, true>
  >,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 4>, false>>
]
