import React, { useState } from 'react'

import { Appointment } from './Appointment'

export type Props = {
  appointments: {
    startsAt: number
    customer: {
      firstName: string
    }
  }[]
}

const appointTimeOfDay = (unixtime: number): string => {
  const [h, m] = new Date(unixtime).toTimeString().split(':')
  return `${h}:${m}`
}

export const AppointmentsDay: React.FC<Props> = ({ appointments }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="appointmentsDay">
      <ol>
        {appointments.map(({ startsAt }, i) => (
          <li key={startsAt}>
            <button type="button" onClick={() => setSelectedIndex(i)}>
              {appointTimeOfDay(startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments today</p>
      ) : (
        <Appointment {...appointments[selectedIndex]} />
      )}
    </div>
  )
}
