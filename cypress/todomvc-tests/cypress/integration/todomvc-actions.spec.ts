import { TodoPage } from '../page-objects/todo-page'

describe('todo actions', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()
    todoPage.addTodo('Tidy room')
  })

  it('should add a new todo to the list', () => {
    todoPage.validateTodoText(0, 'Tidy room')
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
