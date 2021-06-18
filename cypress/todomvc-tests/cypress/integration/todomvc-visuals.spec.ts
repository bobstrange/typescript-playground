import { TodoPage } from '../page-objects/todo-page'

describe('visual validation', () => {
  const todoPage = new TodoPage()

  before(() => {
    todoPage.navigate()

    // simulate title color change
    // cy.visit('https://todomvc-app-for-testing.surge.sh/?different-title-color')
  })

  beforeEach(() => {
    cy.eyesOpen({
      appName: 'TodoMVC',
      batchName: 'TodoMVC batch',
      browser: [
        { name: 'chrome', width: 1024, height: 768 },
        { name: 'chrome', width: 800, height: 600 },
      ],
    })
  })

  afterEach(() => {
    cy.eyesClose()
  })

  it('should look good', () => {
    cy.eyesCheckWindow('empty todo list')

    todoPage.addTodo('Buy some foods')
    todoPage.addTodo('Clean room')

    cy.eyesCheckWindow('two todo list')

    todoPage.toggleTodo(0)

    cy.eyesCheckWindow('mark as completed')
  })
})
