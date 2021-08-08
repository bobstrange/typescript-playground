const users = ['John', 'Jane', 'James']

it('match arrays', () => {
  // Strictly check (===)
  expect(users).toContain(users[0])

  // just checks the value
  expect(users).toContainEqual('John')
})
