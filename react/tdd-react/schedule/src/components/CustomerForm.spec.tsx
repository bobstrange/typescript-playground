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

  const getForm = (id: string): HTMLFormElement | null =>
    container.querySelector(`form[id=${id}]`)

  it('renders a form', () => {
    render(<CustomerForm />)
    expect(getForm('customer')).not.toBeNull()
  })

  it('renders first name field', () => {
    render(<CustomerForm />)
    const form = getForm('customer')
    const field = (form?.elements as any).firstName as HTMLInputElement
    expect(field).not.toBeNull()
    expect(field.tagName).toBe('INPUT')
    expect(field.type).toBe('text')
  })
})
