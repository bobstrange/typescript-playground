const tasks = []

const addTaskButton = document.getElementById('add-task-button')
addTaskButton.addEventListener('click', () => addTask())

const renderTasks = () => {
  const taskContainer = document.getElementById('task-container')
  taskContainer.textContent = ''
  tasks.forEach((taxk, taskNum) => {
    renderTask(taskNum)
  })
}

const renderTask = (taskNum) => {
  const taskRow = document.createElement('div')
  const text = document.createElement('input')
  text.type = 'text'
  text.placeholder = 'Entar a task...'
  text.value = tasks[taskNum]
  text.addEventListener('change', () => {
    tasks[taskNum] = text.value
  })
  const deleteButton = document.createElement('input')
  deleteButton.type = 'button'
  deleteButton.value = 'x'
  deleteButton.addEventListener('click', () => {
    removeTask(taskNum)
  })

  taskRow.appendChild(text)
  taskRow.appendChild(deleteButton)

  const taskContainer = document.getElementById('task-container')
  taskContainer.appendChild(taskRow)
}

const addTask = () => {
  const taskNum = tasks.length
  tasks.push('')
  renderTask(taskNum)
}

const removeTask = (taskNum) => {
  tasks.splice(taskNum, 1)
  renderTasks()
}
