export class TodoPage {
  navigate(): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit('https://todomvc-app-for-testing.surge.sh')
  }

  addTodo(todoText: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.new-todo').type(todoText + '{enter}')
  }

  toggleTodo(todoIndex: number): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
  }

  clearCompleted(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains('Clear completed').click()
  }

  showOnlyCompleteTodos(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains('Completed').click()
  }

  showOnlyActiveTodos(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains('Active').click()
  }

  showAllTodos(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains('All').click()
  }

  validateTodoText(
    todoIndex: number,
    expectedText: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
      .should('have.text', expectedText)
  }

  validateToggleState(
    todoIndex: number,
    shouldBeToggled: boolean
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    const label = cy
      .get(`.todo-list li:nth-child(${todoIndex + 1})`)
      .get('label')
    console.log(label)
    return label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
  }

  validateNumberOfTodosShown(
    expectedNumberOfTodos: number
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
  }

  validateTodoCompletedState(
    todoIndex: number,
    shouldBeCompleted: boolean
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    const label = cy
      .get(`.todo-list li:nth-child(${todoIndex + 1})`)
      .get('label')
    return label.should(
      `${shouldBeCompleted ? '' : 'not.'}have.css`,
      'text-decoration-line',
      'line-through'
    )
  }
}
