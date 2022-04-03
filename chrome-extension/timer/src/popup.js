const timeElement = document.getElementById('time')
const nameElement = document.getElementById('name')
const timerElement = document.getElementById('timer')

chrome.storage.sync.get(['name'], (res) => {
  const name = res.name ?? '???'
  nameElement.textContent = `Your name is ${name}`
})

const updateTimeElements = () => {
  chrome.storage.local.get(['timer'], (res) => {
    const time = res.timer ?? 0
    timerElement.textContent = `You've been here for ${time} seconds`
  })

  const currentTime = new Date().toLocaleTimeString()
  timeElement.textContent = `The time is ${currentTime}`
}

updateTimeElements()
setInterval(updateTimeElements, 1000)

const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

startButton.addEventListener('click', () => {
  chrome.storage.local.set({
    isRunning: true,
  })
})

stopButton.addEventListener('click', () => {
  chrome.storage.local.set({
    isRunning: false,
  })
})

resetButton.addEventListener('click', () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  })
})
