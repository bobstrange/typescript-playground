import React, { FC, useState } from 'react'
import { useInterval } from '../composables/useInterval'

export const WithUseInterval: FC = () => {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return (
    <>
      <h2>With useInterval</h2>
      <div>Count: {count}</div>
    </>
  )
}
