import React from 'react'

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
  return (
    <div className="appointmentsDay">
      <ol>
        {appointments.map(({ startsAt }) => (
          <li key={startsAt}>{appointTimeOfDay(startsAt)}</li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments today</p>
      ) : (
        <Appointment {...appointments[0]} />
      )}
    </div>
  )
}
