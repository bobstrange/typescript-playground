import React, { useContext } from 'react'
import './App.css'
import { CountdownAnimation } from './components/CowntdownAnimation'

import { SetPomodoro } from './components/SetPomodoro'
import { SettingContext } from './context/SettingsContext'

function App() {
  const { stopTimer, updateExecute } = useContext(SettingContext)
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <SetPomodoro updateExecute={updateExecute} />
      <CountdownAnimation onComplete={stopTimer} />
    </div>
  )
}

export default App
