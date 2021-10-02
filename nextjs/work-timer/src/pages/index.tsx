import React from 'react'

import { Timer } from '../components/Timer'

export default function Home() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600) // 10 minutes timer
  return (
    <div>
      <Timer expiryTimestamp={time} />
    </div>
  )
}
