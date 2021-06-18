import { TodoPage } from '../page-objects/todo-page'

describe('todo filtering', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()
    todoPage.addTodo('Tidy room')
    todoPage.addTodo('Learn cypress')
    todoPage.addTodo('Buy some books')

    todoPage.toggleTodo(2)
  })

  it('should filter "Active" todos', () => {
    todoPage.showOnlyActiveTodos()
    todoPage.validateNumberOfTodosShown(2)
  })

  it('should filter "Completed" todos', () => {
    todoPage.showOnlyCompleteTodos()
    todoPage.validateNumberOfTodosShown(1)
  })

  it('should filter "All" todos', () => {
    todoPage.showAllTodos()
    todoPage.validateNumberOfTodosShown(3)
  })
})
