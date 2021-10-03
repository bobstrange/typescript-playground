import React, { useState } from 'react'
import { PomodoroSettings } from '../context/SettingsContext'
import { Button } from './Button'

import './SetPomodoro.css'

type Props = {
  updateExecute?: (settings: PomodoroSettings) => void
}

export const SetPomodoro: React.FC<Props> = ({ updateExecute }) => {
  const [newTimer, setNewTimer] = useState<PomodoroSettings>({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: 'work',
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        })
        break
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        })
        break
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        })
        break
    }
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    updateExecute && updateExecute(newTimer)
  }

  return (
    <div className="form-container">
      <form noValidate>
        <div>
          <input
            className="input"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <div className="button-container">
          <Button
            title="Set Timer"
            callback={handleSubmit}
            activeClass={newTimer.active}
          />
        </div>
      </form>
    </div>
  )
}
