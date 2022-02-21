import { Equal, Expect } from '@type-challenges/utils'

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown>
    ? DeepReadonly<T[K]>
    : T[K]
}

/**
 * まず、1 階層目は
 * {
 *   readonly [K in keyof T]: T[K]
 * }
 * で良い
 * 2 階層目以降も readonly にしたいので、T[K] の部分で再帰的に DeepReadonly<T[K]> としたい
 * が、そうすると、型引数が Record<string, unknown> の以外の場合に、空オブジェクトになってしまう
 * DeepReadonly<() => 22> は {}
 * なので、T[K] が Record<string, unknown> に制限されている場合のみ、再帰にすれば良い
 */

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
    }
  }
}
