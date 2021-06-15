describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('https://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo', { timeout: 6000 }).type('Tidy room{enter}')
  })

  it('should add a new todo to the list', () => {
    cy.get('label').should('have.text', 'Tidy room')
    cy.get('.toggle').should('not.be.checked')
  })

  it('should mark a todo as completed', () => {
    cy.get('.toggle').click()
    cy.get('.toggle').should('be.checked')
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
  })

  it('should clear completed todos', () => {
    cy.get('.toggle').click()
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
  })
})
