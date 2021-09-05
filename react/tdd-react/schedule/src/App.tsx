import React from 'react'
import './App.css'

import { AppointmentsDay } from './components/AppointmentsDay'
import { sampleAppointments } from './sampleData'

function App() {
  return <AppointmentsDay appointments={sampleAppointments} />
}

export default App
