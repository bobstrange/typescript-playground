import React from 'react'
import ReactDOM, { Container } from 'react-dom'

import { Appointment } from './Appointment'

describe('Appointment', () => {
  let container: Container
  let customer

  const render = (component: JSX.Element) => {
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(component, container)
  }

  beforeEach(() => {
    container = document.createElement('div')
  })

  it('renders customer first name', () => {
    customer = { firstName: 'Bob' }
    render(<Appointment customer={customer} />)
    expect(container.textContent).toMatch('Bob')
  })

  it('renders another customer first name', () => {
    customer = { firstName: 'Mike' }
    render(<Appointment customer={customer} />)
    expect(container.textContent).toMatch('Mike')
  })
})
