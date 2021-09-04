import React from 'react'
import ReactDOM, { Container } from 'react-dom'
import { Props } from './AppointmentsDay'

import { AppointmentsDay } from './AppointmentsDay'

describe('AppointmentsDay', () => {
  let container: Container
  let today: Date
  let appointments: Props['appointments']

  beforeEach(() => {
    container = document.createElement('div')
    today = new Date()
    appointments = [
      { startsAt: today.setHours(12, 0), customer: { firstName: 'Bob' } },
      { startsAt: today.setHours(13, 0), customer: { firstName: 'Mike' } },
    ]
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
    render(<AppointmentsDay appointments={appointments} />)
    expect(container.querySelector('ol')).not.toBeNull()
    expect(container.querySelector('ol')?.children).toHaveLength(2)
  })

  it('renders each appointments', () => {
    render(<AppointmentsDay appointments={appointments} />)
    const elements = container.querySelectorAll('li')
    expect(elements).toHaveLength(2)
    expect(elements[0].textContent).toEqual('12:00')
    expect(elements[1].textContent).toEqual('13:00')
  })

  it('initially shows a message saying there are no appointments today', () => {
    render(<AppointmentsDay appointments={[]} />)
    expect(container.textContent).toMatch('There are no appointments today')
  })

  it('selects the first appointment by default', () => {
    render(<AppointmentsDay appointments={appointments} />)
    expect(container.textContent).toMatch('Bob')
  })
})
