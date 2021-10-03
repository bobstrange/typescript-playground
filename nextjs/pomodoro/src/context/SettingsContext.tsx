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
  pomodoro?: number
  executing?: PomodoroSettings | Record<string, never>
  startAnimate?: boolean
  startTimer?: () => void
  pauseTimer?: () => void
  setCurrentTimer?: (arg: PomodoroSettings['active']) => void
  remaining?: ({ remainingTimer }: { remainingTimer: number }) => string
  settingButton?: () => void
}

export const SettingContext = createContext<Props>({})

export const SettingsContextProvider: React.FC = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(0)
  const [executing, setExecuting] = useState<PomodoroSettings>({})
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

  function settingButton() {
    setExecuting({})
    setPomodoro(0)
  }

  function setCurrentTimer(activeState: PomodoroSettings['active']) {
    updateExecute({ ...executing, active: activeState })
    setTimerTime(executing)
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

  const remaining = ({ remainingTimer }: { remainingTimer: number }) => {
    const minutes = Math.floor(remainingTimer / 60)
    const seconds = remainingTimer % 60
    return `${minutes}:${seconds}`
  }

  return (
    <SettingContext.Provider
      value={{
        stopTimer,
        updateExecute,
        setTimerTime,
        executing,
        pomodoro,
        startAnimate,
        startTimer,
        pauseTimer,
        remaining,
        setCurrentTimer,
        settingButton,
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
