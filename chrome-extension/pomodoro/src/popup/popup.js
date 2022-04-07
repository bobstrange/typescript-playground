let tasks = []

const updateTime = () => {
  chrome.storage.local.get(['timer'], (res) => {
    const time = document.getElementById('time')
    const minutes = 25 - Math.ceil(res.timer / 60)

    let seconds = 0
    if (res.timer % 60 !== 0) {
      seconds = 60 - (res.timer % 60)
    }
    time.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  })
}

updateTime()
setInterval(updateTime, 1000)

const startTimerButton = document.getElementById('start-timer-button')
startTimerButton.addEventListener('click', () => {
  chrome.storage.local.get(['isRunning'], (res) => {
    chrome.storage.local.set(
      {
        isRunning: !res.isRunning,
      },
      () => {
        startTimerButton.textContent = !res.isRunning
          ? 'Pause Timer'
          : 'Start Timer'
      }
    )
  })
})

const resetTimerButton = document.getElementById('reset-timer-button')
resetTimerButton.addEventListener('click', () => {
  chrome.storage.local.set(
    {
      timer: 0,
      isRunning: false,
    },
    () => {
      startTimerButton.textContent = 'Start Timer'
    }
  )
})

chrome.storage.sync.get(['tasks'], (res) => {
  tasks = res.tasks ? res.tasks : []
  renderTasks()
})

const addTaskButton = document.getElementById('add-task-button')
addTaskButton.addEventListener('click', () => addTask())

const saveTasks = () => {
  chrome.storage.sync.set({
    tasks,
  })
}

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
    saveTasks()
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
  saveTasks()
  renderTask(taskNum)
}

const removeTask = (taskNum) => {
  tasks.splice(taskNum, 1)
  saveTasks()
  renderTasks()
}
