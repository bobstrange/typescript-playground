import React from 'react'
import './App.css'
import { CountdownAnimation } from './components/CowntdownAnimation'

import { SetPomodoro } from './components/SetPomodoro'

function App() {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <SetPomodoro />
      <CountdownAnimation />
    </div>
  )
}

export default App
