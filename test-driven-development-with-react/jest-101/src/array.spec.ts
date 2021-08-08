it('match arrays', () => {
  const users = ['John', 'Jane', 'James']

  // Strictly check (===)
  expect(users).toContain(users[0])

  // just checks the value
  expect(users).toContainEqual('John')
})

it('array containing', () => {
  const users = ['John', 'Jane', 'James']

  const userSet = expect.arrayContaining(['Jane', 'James'])
  expect(users).toEqual(userSet)
})

it('object containing', () => {
  const user = {
    name: 'Bob Strange',
    location: 'Tokyo',
    hobby: [{ name: 'Programming' }, { name: 'Cycling' }],
  }

  // Can define matcher as you would in natural language
  const matcher = expect.objectContaining({
    name: expect.stringContaining('Bob'),
    hobby: expect.arrayContaining([{ name: 'Programming' }]),
  })

  expect(user).toEqual(matcher)
})
