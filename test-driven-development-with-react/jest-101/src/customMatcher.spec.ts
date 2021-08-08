import jsonpath from 'jsonpath'

const user = {
  name: 'Bob Strange',
  location: 'Tokyo',
  hobby: [{ name: 'Programming' }, { name: 'Cycling' }],
}

beforeEach(() => {
  expect.extend({
    toMatchJSONPath(received, argument) {
      const result = jsonpath.query(received, argument)
      if (result.length > 0) {
        return {
          pass: true,
          message: () => 'matched',
        }
      }
      return {
        pass: false,
        message: () =>
          `expected ${JSON.stringify(received)} to match jsonpath ${argument}`,
      }
    },
  })
})

describe('jsonpath', () => {
  it('matches jsonpath', () => {
    expect(user).toMatchJSONPath('$.name')
  })

  it('does not match jsonpath', () => {
    expect(user).not.toMatchJSONPath('$.age')
  })
})
