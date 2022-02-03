import { Expect, Equal } from '@type-challenges/utils'

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
]

type Length<T extends unknown[]> = T['length']

type cases_0018 = [
  Expect<Equal<Length<tesla>, 4>>,
  Expect<Equal<Length<spaceX>, 5>>
]
