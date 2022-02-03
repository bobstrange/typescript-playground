import { Expect, Equal } from '@type-challenges/utils'

type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K
}
type cases_11 = Expect<
  Equal<
    TupleToObject<['tesla', 'model 3', 'model X', 'model Y']>,
    {
      tesla: 'tesla'
      'model 3': 'model 3'
      'model X': 'model X'
      'model Y': 'model Y'
    }
  >
>
