import React, { useState } from 'react'
import { useInterval } from './useInterval'

type UseTimerProps = {
  timestamp: Date
  onExpire?: () => void
}

const DEFAULT_INTERVAL = 1000

const getRemainingSecondsFromExpiryTimestamp = (timestamp: Date): number => {
  const milliSeconds = (new Date().getTime() - timestamp.getTime()) / 1000
  return Math.max(0, Math.round(milliSeconds / 1000))
}

export const useTimer = ({ timestamp, onExpire }: UseTimerProps) => {
  const [expiryTimestamp, setExpiryTimestamp] = useState(timestamp)
  const [remainingSeconds, setRemainingSeconds] = useState(
    getRemainingSecondsFromExpiryTimestamp(expiryTimestamp)
  )
  const [isRunning, setIsRunning] = useState(false)

  const start = () => {
    if (isRunning) {
      return
    }
    setIsRunning(true)
  }

  const pause = () => {
    setIsRunning(false)
  }

  useInterval(
    () => {
      const remaining = getRemainingSecondsFromExpiryTimestamp(expiryTimestamp)
      setRemainingSeconds(remaining)
    },
    isRunning ? DEFAULT_INTERVAL : null
  )

  return {
    remainingSeconds,
    start,
    pause,
  }
}
