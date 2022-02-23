import { Equal, Expect } from '@type-challenges/utils'

type LookUp<U, T> = U extends { type: T } ? U : never

/**
 *  U は union が渡されてくるので
 *  distributes over union の性質上、union の各要素に対して conditional が適用されて
 *  合致する場合が、求める型ということ
 */
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>
]
