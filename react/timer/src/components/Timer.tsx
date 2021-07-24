import React, {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useState,
} from 'react'

import { useTimer } from '../hooks/useTimer'

export const Timer: FC = () => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const { remainingSeconds, start, pause } = useTimer()

  const handleStart: MouseEventHandler<HTMLButtonElement> = () => {
    start()
  }

  const handleHourChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setHour(parseInt(target.value))
  }

  const handleMinuteChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setMinute(parseInt(target.value))
  }

  const handleSecondChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setSecond(parseInt(target.value))
  }

  return (
    <>
      <h1>Timer</h1>
      <input
        type="number"
        min="0"
        size={1}
        placeholder="h"
        onChange={handleHourChange}
        value={hour}
      />
      <input
        type="number"
        min="0"
        size={1}
        placeholder="m"
        onChange={handleMinuteChange}
        value={minute}
      />
      <input
        type="number"
        min="0"
        size={1}
        placeholder="s"
        onChange={handleSecondChange}
        value={second}
      />

      <button onClick={handleStart}>Start</button>
      <div>remaining: {remaining}</div>
    </>
  )
}
