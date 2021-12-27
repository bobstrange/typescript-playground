import { Expect, Equal } from '@type-challenges/utils'

type CamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${Capitalize<First>}${CamelCase<Capitalize<Rest>>}`
  : T

type cases_610 = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'FooBarBaz'>>,
  Expect<Equal<CamelCase<'foobar----baz'>, 'FoobarBaz'>>
]
