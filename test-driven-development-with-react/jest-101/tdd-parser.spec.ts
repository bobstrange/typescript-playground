/**
 *  parser for Tracking Progress
 * ddBQbq -> { Dev days: 2.0, "QA days": 1, "Blocked days": 0.5 }
 */

const translate = (input: string) => {
  const initialState = { Dev: 0, QA: 0, Blocked: 0 }
  const state = input
    .split('')
    .map(parse)
    .reduce((acc, curr) => {
      acc[curr.status] += curr.days
      return acc
    }, initialState)

  return state
}

const parse = (
  input: string
): { status: 'Dev' | 'QA' | 'Blocked'; days: number } => {
  switch (input) {
    case 'd':
      return { status: 'Dev', days: 0.5 }
    case 'D':
      return { status: 'Dev', days: 1.0 }
    default:
      throw new Error(`Unknown status: ${input}`)
  }
}

it('translates d to half a dev day', () => {
  expect(translate('d')).toEqual({ Dev: 0.5, QA: 0, Blocked: 0 })
})

it('translates D to one dev day', () => {
  expect(translate('D')).toEqual({ Dev: 1, QA: 0, Blocked: 0 })
})

it('translates dD to one and half dev days', () => {
  expect(translate('dD')).toEqual({ Dev: 1.5, QA: 0, Blocked: 0 })
})

// it('translates q to half a dev day', () => {
//   expect(translate('q')).toEqual({ QA: 0.5 })
// })
