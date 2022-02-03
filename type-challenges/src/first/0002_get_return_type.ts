import { Expect, Equal } from '@type-challenges/utils'

const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

const fn2 = (foo: string, bar: string) => {
  if (foo.length + bar.length > 20) {
    return true
  }

  return 'something'
}

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type case_2 = [
  Expect<Equal<MyReturnType<typeof fn>, 1 | 2>>,
  Expect<Equal<MyReturnType<typeof fn2>, true | 'something'>>
]
