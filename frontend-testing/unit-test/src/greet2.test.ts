import { greet } from './greet'
vi.mock('./greet.ts')
test('greet() returns undefined', () => {
  expect(greet('World')).toBeUndefined()
})
