import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react'

export const MyTimer: FC = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  const handleStart: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    if (intervalRef.current) {
      return
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
  }, [])

  const handleStop: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    if (!intervalRef.current) {
      return
    }
    clearInterval(intervalRef.current)
    intervalRef.current = undefined
  }, [])

  return (
    <>
      Count: {count}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}
