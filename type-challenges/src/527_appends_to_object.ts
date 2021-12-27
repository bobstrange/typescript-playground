import { Expect, Equal } from '@type-challenges/utils'

type Key = string | number | symbol
// [K in keyof T]: K extends keyof T ? T[K] : never で、元の型のデータを
// [K in keyof U]: K extends keyof T ? never : V で、追加対象の key と value を
type AppendToObject<T, U extends Key, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}

type cases_527 = Expect<
  Equal<AppendToObject<{ id: '1' }, 'value', 4>, { id: '1'; value: 4 }>
>
