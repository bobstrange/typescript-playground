import React from 'react'
import ReactDOM, { Container } from 'react-dom'

import { AppointmentsDay } from './AppointmentsDay'

describe('AppointmentsDay', () => {
  let container: Container

  beforeEach(() => {
    container = document.createElement('div')
  })

  const render = (component: JSX.Element) => {
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(component, container)
  }

  it('renders a appointmentsDay component', () => {
    render(<AppointmentsDay appointments={[]} />)
    expect(container.querySelector('div.appointmentsDay')).not.toBeNull()
  })

  it('renders multiple appointments', () => {
    const today = new Date()
    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) },
    ]
    render(<AppointmentsDay appointments={appointments} />)
    expect(container.querySelector('ol')).not.toBeNull()
    expect(container.querySelector('ol')?.children).toHaveLength(2)
  })

  it('renders each appointments', () => {
    const today = new Date()
    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) },
    ]
    render(<AppointmentsDay appointments={appointments} />)
    const elements = container.querySelectorAll('li')
    expect(elements).toHaveLength(2)
    expect(elements[0].textContent).toEqual('12:00')
    expect(elements[1].textContent).toEqual('13:00')
  })
})
