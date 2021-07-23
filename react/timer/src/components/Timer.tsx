import React, {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'

const calcRemaining = (h: number, m: number, s: number, elapsed = 0) => {
  return h * 60 * 60 + m * 60 + s - elapsed
}

export const Timer: FC = () => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [time, setTime] = useState<Date>()
  const [timer, setTimer] = useState<NodeJS.Timeout>()
  const [remainingTime, setRemainingTime] = useState(0)

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  const tick = () => {
    console.log('tick: ', time)
    if (time) {
      const now = new Date()
      const elapsedTime = now.getTime() - time.getTime()
      const remaining = calcRemaining(hour, minute, second, elapsedTime)
      setRemainingTime(remaining)
    }
  }

  const handleStart: MouseEventHandler<HTMLButtonElement> = () => {
    setTime(new Date())
    setRemainingTime(calcRemaining(hour, minute, second))
    setTimer(setInterval(tick, 1000))
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

      {remainingTime && <div>{remainingTime}</div>}
    </>
  )
}
