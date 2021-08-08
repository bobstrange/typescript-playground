it('create a callable function', () => {
  const mock = jest.fn()
  mock('Bob')
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith('Bob')
  expect(mock).toHaveBeenCalledWith('Bob')
  expect(mock).toHaveBeenCalledTimes(1)
})

it('mock implementation', () => {
  const mockAdd = jest.fn().mockImplementation((a, b) => 5)
  expect(mockAdd(1, 2)).toBe(5)
  expect(mockAdd).toHaveBeenCalledWith(1, 2)
})

class User {
  async fetchUser(id: number) {
    const result = await fetch(`https://whatever.dev/users/${id}`)
    return await result.json()
  }
}

describe('mock API call', () => {
  const user = {
    name: 'Bob',
  }

  it('mock fetch', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: jest.fn().mockResolvedValue({ user }) })
      )

    const userModel = new User()
    expect(await userModel.fetchUser(123)).toEqual({ user: { name: 'Bob' } })
    expect(global.fetch).toHaveBeenCalledWith('https://whatever.dev/users/123')
  })
})
