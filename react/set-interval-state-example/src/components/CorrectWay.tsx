import React, { FC, useEffect, useState } from 'react'

export const CorrectWay: FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <>
      <h2>Correct count</h2>
      <div>Count: {count}</div>
    </>
  )
}
