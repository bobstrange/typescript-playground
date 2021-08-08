/**
 *  parser for Tracking Progress
 * ddBQbq -> { Dev days: 2.0, "QA days": 1, "Blocked days": 0.5 }
 */
type State = {
  Dev: number
  QA: number
  Blocked: number
}

const translate = (input: string): State => {
  const state = input
    .split('')
    .map(parse)
    .reduce(
      (acc, curr) => {
        acc[curr.status] += curr.days
        return acc
      },
      { Dev: 0, QA: 0, Blocked: 0 }
    )

  return state
}

const stateMapping = {
  d: {
    status: 'Dev',
    days: 0.5,
  },
  D: {
    status: 'Dev',
    days: 1,
  },
  q: {
    status: 'QA',
    days: 0.5,
  },
} as const

type StateInputKey = 'd' | 'D' | 'q'

const isStateInputKeys = (input: string): input is StateInputKey => {
  return ['d', 'D', 'q'].includes(input)
}

const parse = (input: string): { status: 'Dev' | 'QA'; days: number } => {
  if (!isStateInputKeys(input)) {
    throw new Error(`Invalid input: ${input}`)
  }

  const state = stateMapping[input]
  return state
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

it('translates q to half a dev day', () => {
  expect(translate('q')).toEqual({ Dev: 0, QA: 0.5, Blocked: 0 })
})
