import React from 'react'

type Props = {
  customer: {
    firstName: string
  }
}
export const Appointment: React.FC<Props> = ({ customer: { firstName } }) => {
  return <div>{firstName}</div>
}
