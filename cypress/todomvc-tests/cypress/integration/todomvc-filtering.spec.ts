describe('todo filtering', () => {
  beforeEach(() => {
    cy.visit('https://todomvc-app-for-testing.surge.sh')

    cy.get('.new-todo').type('Tidy room{enter}')
    cy.get('.new-todo').type('Learn cypress{enter}')
    cy.get('.new-todo').type('Buy some books{enter}')

    cy.get('.todo-list li:nth-child(2) .toggle').click()
  })

  it('should filter "Active" todos', () => {
    cy.contains('Active').click()
  })
})
