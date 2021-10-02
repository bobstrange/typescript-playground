import React, { useState } from 'react'

export default function Home() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  const changeHandler = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return (e) => {
      console.log(e.target.value)
      setter(parseInt(e.target.value))
    }
  }

  return (
    <>
      <form action="">
        <input
          type="number"
          name="hour"
          id="hour"
          placeholder="h"
          value={hour ? hour : ''}
          autoComplete="off"
          spellCheck="false"
          onChange={changeHandler(setHour)}
          min="0"
          size={1}
        />
        <input
          type="number"
          name="minute"
          id="minute"
          placeholder="m"
          value={minute ? minute : ''}
          autoComplete="off"
          spellCheck="false"
          onChange={changeHandler(setMinute)}
          min="0"
          size={1}
        />
        <button type="submit">Start</button>
      </form>
    </>
  )
}
