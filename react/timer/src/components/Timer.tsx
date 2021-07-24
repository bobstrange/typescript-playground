import React, {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useState,
} from 'react'
import { useInterval } from '../hooks/useInterval'

const calcRemaining = (h: number, m: number, s: number, elapsed = 0) => {
  return h * 60 * 60 + m * 60 + s - elapsed
}

export const Timer: FC = () => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const [isRunning, setIsRunning] = useState(false)
  const [interval, setInterval] = useState<number | null>(null)
  const [startTime, setStartTime] = useState<Date>()
  const [remaining, setRemaining] = useState(
    calcRemaining(hour, minute, second)
  )

  useInterval(
    () => {
      if (!startTime) {
        return
      }
      const elapsedTime = (new Date().getTime() - startTime.getTime()) / 1000
      const remainingTime = calcRemaining(hour, minute, second, elapsedTime)
      if (remainingTime <= 0) {
        setIsRunning(false)
        setInterval(null)
        setRemaining(0)
      } else {
        setRemaining(remainingTime)
      }
    },
    isRunning ? interval : null
  )

  const handleStart: MouseEventHandler<HTMLButtonElement> = () => {
    setStartTime(new Date())
    setInterval(1000)
    setIsRunning(true)
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
