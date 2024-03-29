const timerAlarm = 'pomodoroTimer'
chrome.alarms.create(timerAlarm, {
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === timerAlarm) {
    chrome.storage.local.get(['timer', 'isRunning'], (res) => {
      if (res.isRunning) {
        let timer = res.timer + 1
        let isRunning = true
        if (timer === 10) {
          this.registration.showNotification('Pomodoro Timer', {
            body: '25 minutes has passed!',
            icon: 'icon.png',
          })
          timer = 0
          isRunning = false
        }
        chrome.storage.local.set({
          timer,
          isRunning,
        })
      }
    })
  }
})

chrome.storage.local.get(['timer', 'isRunning'], (res) => {
  chrome.storage.local.set({
    timer: 'timer' in res ? res.timer : 0,
    isRunning: 'isRunning' in res ? res.isRunning : false,
  })
})
