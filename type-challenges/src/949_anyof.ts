/* eslint-disable @typescript-eslint/ban-types */
import { Expect, Equal } from '@type-challenges/utils'

type FalseLike =
  | false
  | 0
  | ''
  | null
  | undefined
  | void
  | []
  | { [key: string]: never }
type AnyOf<T extends any[]> = T[number] extends FalseLike ? false : true

type hogehgoe = [1, '', false, [], {}]

type cases_949 = [
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>
]
