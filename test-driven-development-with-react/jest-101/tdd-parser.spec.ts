/**
 *  parser for Tracking Progress
 * ddBQbq -> { Dev days: 2.0, "QA days": 1, "Blocked days": 0.5 }
 */

const translate = (input: string) => {
  const sum = input
    .split('')
    .map((char) => {
      return char === 'd' ? 0.5 : 1.0
    })
    .reduce((acc, curr) => {
      return acc + curr
    }, 0)

  return {
    Dev: sum,
  }
}

it('translates d to half a dev day', () => {
  expect(translate('d')).toEqual({ Dev: 0.5 })
})

it('translates D to one dev day', () => {
  expect(translate('D')).toEqual({ Dev: 1 })
})

it('translates dD to one and half dev days', () => {
  expect(translate('dD')).toEqual({ Dev: 1.5 })
})
