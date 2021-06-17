export class TodoPage {
  navigate(): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit('https://todomvc-app-for-testing.surge.sh')
  }

  addTodo(todoText: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.new-todo', { timeout: 6000 }).type(todoText + '{enter}')
  }

  toggleTodo(todoIndex: number): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
  }

  validateTodoText(
    todoIndex: number,
    expectedText: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
      .should('have.text', expectedText)
  }
}
