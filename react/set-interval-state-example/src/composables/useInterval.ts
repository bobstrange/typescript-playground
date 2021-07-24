import React, { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number): void => {
  const callbackRef = useRef<() => void>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      callbackRef.current && callbackRef.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
