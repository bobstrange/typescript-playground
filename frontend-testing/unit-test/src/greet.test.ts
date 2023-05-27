import { greet } from './greet'

test('greet() returns a greeting for the given name', () => {
  expect(greet('World')).toBe('Hello World')
})
