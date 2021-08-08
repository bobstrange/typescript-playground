import { add } from './calc'

describe('calc', () => {
  it('add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
