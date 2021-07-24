import React, {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useState,
} from 'react'
import { useInterval } from '../composables/useInterval'

export const WithUseInterval: FC = () => {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  const handleCountReset: MouseEventHandler<HTMLButtonElement> = () => {
    setCount(0)
  }

  const handleDelayChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDelay(Number(e.target.value))
  }

  useInterval(() => {
    setCount(count + 1)
  }, delay)

  return (
    <>
      <h2>With useInterval</h2>
      <div>Count: {count}</div>
      <button onClick={handleCountReset}>Reset</button>
      <input type="number" onChange={handleDelayChange} value={delay} />
    </>
  )
}
