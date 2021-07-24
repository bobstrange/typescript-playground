import { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export const useInterval = (callback: Function, interval: number) => {
  const callbackRef = useRef<typeof callback>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!interval) {
      return
    }

    const id = setInterval(() => {
      callbackRef.current && callbackRef.current()
    }, interval)

    return () => {
      clearInterval(id)
    }
  }, [interval])
}
