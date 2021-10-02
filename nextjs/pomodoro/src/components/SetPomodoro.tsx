import React, { useState } from 'react'
import { Button } from './Button'

export const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
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

  const handleSubmit = () => {
    console.log('hi')
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
        <Button
          title="Set Timer"
          callback={handleSubmit}
          activeClass={newTimer.active}
        />
      </form>
    </div>
  )
}
