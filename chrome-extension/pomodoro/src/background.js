const timerAlarm = 'pomodoroTimer'
chrome.alarms.create(timerAlarm, {
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === timerAlarm) {
    chrome.storage.local.get(['timer', 'isRunning'], (res) => {
      if (res.isRunning) {
        const timer = res.timer + 1
        console.log(timer)
        chrome.storage.local.set({
          timer,
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
