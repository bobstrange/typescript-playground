import { Expect, Equal } from '@type-challenges/utils'

type Exclude<T, U> = T extends U ? never : T
/**
 * conditional type の型引数に Union を渡した場合は、Union の各要素について conditional type の条件が適用される
 * (Distributive Conditional Types) ので、このようになる。
 */

type cases_0043 = [
  Expect<Equal<Exclude<'山田' | '山本', '山田'>, '山本'>>,
  Expect<
    Equal<Exclude<['foo', 'bar'] | true | 100, 100>, ['foo', 'bar'] | true>
  >,
  Expect<
    Equal<Exclude<['foo', 'bar'] | true | 100, ['foo', 'bar'] | true>, 100>
  >
]
