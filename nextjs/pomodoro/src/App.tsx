import React from 'react'
import './App.css'

import { SetPomodoro } from './components/SetPomodoro'

function App() {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <SetPomodoro />
    </div>
  )
}

export default App
