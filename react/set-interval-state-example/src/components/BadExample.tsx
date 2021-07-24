import React, { FC, useEffect, useState } from 'react'

export const BadExample: FC = () => {
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
      <div>count: {count}</div>
    </>
  )
}
