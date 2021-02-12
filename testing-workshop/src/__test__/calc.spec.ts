import { sum } from '@/calc'

it('adds values', () => {
  expect(sum(1, 2, 3, 4)).toBe(10)
})
