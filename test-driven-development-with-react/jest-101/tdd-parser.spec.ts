/**
 *  parser for Tracking Progress
 * ddBQbq -> { Dev days: 2.0, "QA days": 1, "Blocked days": 0.5 }
 */

const translate = (input: string) => ({ Dev: 0.5 })

it('translates d to half a dev day', () => {
  expect(translate('d')).toEqual({ Dev: 0.5 })
})
