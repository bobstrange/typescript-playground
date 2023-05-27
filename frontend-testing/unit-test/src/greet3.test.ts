import { greet, goodbye } from './greet'

vi.mock('./greet', async () => {
  const mod = await vi.importActual<typeof import('./greet')>('./greet')
  return {
    ...mod,
    goodbye: (name: string) => `Goodbye ${name}`,
  }
})

test('mocked goodbye returns a goodbye for the given name', () => {
  expect(goodbye('Taro')).toBe('Goodbye Taro')
})

test("greet keeps it's original implementation", () => {
  expect(greet('World')).toBe('Hello World')
})
