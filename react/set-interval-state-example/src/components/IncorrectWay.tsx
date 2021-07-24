import React, { FC, useEffect, useState } from 'react'

export const IncorrectWay: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <>
      <h2>Incorrect Count</h2>
      <div>count: {count}</div>
    </>
  )
}
