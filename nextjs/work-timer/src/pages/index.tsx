import React, { useState } from 'react'

import { Timer } from '../components/Timer'
import { TimerInput } from '../components/TimerInput'

export default function Home() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(10)

  const handleChangeHour = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHour(parseInt(e.target.value))
  }
  const handleChangeMinute = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinute(parseInt(e.target.value))
  }

  const time = new Date()
  time.setSeconds(time.getSeconds() + hour * 60 * 60 + minute * 60)

  return (
    <div>
      <TimerInput
        hour={hour}
        minute={minute}
        changeHour={handleChangeHour}
        changeMinute={handleChangeMinute}
      />
      <Timer expiryTimestamp={time} />
    </div>
  )
}
