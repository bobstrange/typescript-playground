import React from 'react'
import {
  createContainer,
  Container,
  Renderer,
} from '../../test/domManupulators'
import { CustomerForm } from './CustomerForm'

describe('CustomerForm', () => {
  let render: Renderer, container: Container

  beforeEach(() => {
    ;({ render, container } = createContainer())
  })

  it('renders a form', () => {
    render(<CustomerForm />)
    expect(container.querySelector('form[id="customer"]')).not.toBeNull()
  })
})
