import React from 'react'

type Props = {
  hour: number
  minute: number
  changeHour: React.ChangeEventHandler<HTMLInputElement>
  changeMinute: React.ChangeEventHandler<HTMLInputElement>
}

export const TimerInput: React.FC<Props> = ({
  hour,
  minute,
  changeHour,
  changeMinute,
}) => {
  return (
    <>
      <input
        type="number"
        min="0"
        size={1}
        placeholder="h"
        value={hour || ''}
        onChange={changeHour}
      />
      <input
        type="number"
        min="0"
        size={1}
        placeholder="m"
        value={minute || ''}
        onChange={changeMinute}
      />
    </>
  )
}
