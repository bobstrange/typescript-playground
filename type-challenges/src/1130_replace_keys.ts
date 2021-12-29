import { Expect, Equal } from '@type-challenges/utils'

type NodeA_1130 = {
  type: 'A'
  name: string
  flag: number
}

type NodeB_1130 = {
  type: 'B'
  id: number
  flag: number
}

type NodeC_1130 = {
  type: 'C'
  name: string
  flag: number
}

type Nodes_1130 = NodeA_1130 | NodeB_1130 | NodeC_1130

type ReplaceKeys<T, U, V> = {
  [K in keyof T]: K extends U ? (K extends keyof V ? V[K] : T[K]) : never
}

type ReplacedNodes_1130 = ReplaceKeys<
  Nodes_1130,
  'name' | 'flag',
  { name: number; flag: string }
> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes_1130, 'name', { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

type cases_1130 = [
  Expect<
    Equal<
      ReplacedNodes_1130,
      | { type: 'A'; name: number; flag: string }
      | { type: 'B'; id: number; flag: string }
      | { type: 'C'; name: number; flag: string }
    >
  >,
  Expect<
    Equal<
      ReplacedNotExistKeys,
      | { type: 'A'; name: never; flag: number }
      | NodeB_1130
      | { type: 'C'; name: never; flag: number }
    >
  >
]
