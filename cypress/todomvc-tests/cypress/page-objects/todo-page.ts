export class TodoPage {
  navigate(): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit('https://todomvc-app-for-testing.surge.sh')
  }

  addTodo(todoText: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.new-todo', { timeout: 6000 }).type(todoText + '{enter}')
  }
}
