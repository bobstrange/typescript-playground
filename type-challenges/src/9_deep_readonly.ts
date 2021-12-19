import { Expect, Equal } from '@type-challenges/utils'

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type cases_9 = [Expect<Equal<DeepReadonly<X>, Expected>>]
