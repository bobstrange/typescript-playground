import React from 'react'

type Props = {
  appointments: {
    startsAt: number
  }[]
}

export const AppointmentsDay: React.FC<Props> = ({ appointments }) => {
  return (
    <div className="appointmentsDay">
      <ol>
        {appointments.map(({ startsAt }) => (
          <li key={startsAt}>{startsAt}</li>
        ))}
      </ol>
    </div>
  )
}
