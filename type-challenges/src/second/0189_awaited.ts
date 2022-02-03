import { Expect, Equal } from '@type-challenges/utils'

type Awaited<T> = T extends Promise<infer U> ? U : never
/**
 * 右辺は、Promise の型引数について、infer する
 * condition は必ず 真になるので、偽の場合は never
 */
type cases_0043 = [
  Expect<Equal<Awaited<Promise<number>>, number>>,
  Expect<Equal<Awaited<Promise<string>>, string>>,
  Expect<Equal<Awaited<Promise<Promise<void>>>, Promise<void>>,
]
