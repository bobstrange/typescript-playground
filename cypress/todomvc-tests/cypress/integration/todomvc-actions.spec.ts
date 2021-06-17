import { TodoPage } from '../page-objects/todo-page'

describe('todo actions', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()
    todoPage.addTodo('Tidy room')
  })

  it('should add a new todo to the list', () => {
    todoPage.validateTodoText(0, 'Tidy room')
    todoPage.validateToggleState(0, false)
  })

  it('should mark a todo as completed', () => {
    todoPage.toggleTodo(0)
    todoPage.validateTodoCompletedState(0, true)
  })

  it('should clear completed todos', () => {
    todoPage.toggleTodo(0)
    todoPage.clearCompleted()
    todoPage.validateNumberOfTodosShown(0)
  })
})
