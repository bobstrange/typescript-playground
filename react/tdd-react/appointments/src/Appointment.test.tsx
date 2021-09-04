import React from 'react'
import ReactDOM from 'react-dom'

import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders customer first name', () => {
    const customer = { firstName: 'Bob' }
    const component = <Appointment customer={customer} />
    const container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(component, container)
    expect(document.body.textContent).toMatch('Bob')
  })
})
