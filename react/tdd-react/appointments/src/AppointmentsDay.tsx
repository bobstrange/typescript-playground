import React from 'react'

type Props = {
  appointments: {
    startsAt: number
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
    </div>
  )
}
