import React from 'react'
import ReactDOM, { Container } from 'react-dom'

import { AppointmentsDay } from './AppointmentsDay'

describe('AppointmentsDay', () => {
  let conatiner: Container

  beforeEach(() => {
    conatiner = document.createElement('div')
  })

  const render = (component: JSX.Element) => {
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(component, container)
  }

  it('renders a div with the right id', () => {
    render(<AppointmentsDay appointments={[]} />)
    expect(container.querySelector('div#appointmentsDay')).not.toBeNull()
  })
})
