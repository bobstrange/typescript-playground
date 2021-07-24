import { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export const useInterval = (callback: Function, interval: number | null) => {
  const callbackRef = useRef<typeof callback>()

  useEffect(() => {
    console.log('callbackRef updated')
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!interval) {
      return
    }

    const id = setInterval(() => {
      console.log('setInterval')
      callbackRef.current && callbackRef.current()
    }, interval)

    return () => {
      clearInterval(id)
    }
  }, [interval])
}
