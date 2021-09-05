import React from 'react'
import ReactDOM from 'react-dom'

import { AppointmentsDay } from './AppointmentsDay'
import { sampleAppointments } from './sampleData'

ReactDOM.render(
  <AppointmentsDay appointments={sampleAppointments} />,
  document.getElementById('app')
)
