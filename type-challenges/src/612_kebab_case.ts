import { Expect, Equal } from '@type-challenges/utils'

type KebabCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? // Rest の先頭が小文字から始まる場合
    Rest extends Uncapitalize<Rest>
    ? `${Lowercase<First>}${KebabCase<Rest>}`
    : // Rest が大文字から始まる場合
      `${Lowercase<First>}-${KebabCase<Uncapitalize<Rest>>}`
  : T
type case_612 = Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>
