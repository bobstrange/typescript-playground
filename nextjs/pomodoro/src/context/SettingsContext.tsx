import React, { createContext, useState } from 'react'

export type PomodoroSettings = {
  work: number
  short: number
  long: number
  active: 'work' | 'short' | 'long'
}

export type Props = {
  stopTimer?: () => void
  updateExecute?: (arg: PomodoroSettings) => void
  setTimerTime?: (arg: PomodoroSettings) => void
}

export const SettingContext = createContext<Props>({})

export const SettingsContextProvider: React.FC = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(0)
  const [executing, setExecuting] = useState({})
  const [startAnimate, setStartAnimate] = useState(false)

  function startTimer() {
    setStartAnimate(true)
  }

  function pauseTimer() {
    setStartAnimate(false)
  }

  function stopTimer() {
    setStartAnimate(false)
  }

  function updateExecute(updatedSettings: PomodoroSettings) {
    setExecuting(updatedSettings)
  }

  function setTimerTime(setting: PomodoroSettings) {
    switch (setting.active) {
      case 'work':
        setPomodoro(setting.work)
        break
      case 'short':
        setPomodoro(setting.short)
        break
      case 'long':
        setPomodoro(setting.long)
        break
      default:
        setPomodoro(0)
        break
    }
  }

  return (
    <SettingContext.Provider value={{ stopTimer, updateExecute, setTimerTime }}>
      {children}
    </SettingContext.Provider>
  )
}
