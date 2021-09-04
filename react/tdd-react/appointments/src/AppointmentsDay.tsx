import React from 'react'

type Props = {
  appointments: {
    startsAt: number
  }[]
}

export const AppointmentsDay: React.FC<Props> = ({ appointments }) => {
  return <div className="appointmentsDay"></div>
}
