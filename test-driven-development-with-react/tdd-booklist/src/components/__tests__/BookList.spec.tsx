import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { BookList } from '../BookList'

const renderWithRouter = (component: JSX.Element): RenderResult => {
  return {
    ...render(<Router>{component}</Router>),
  }
}

describe('BookList', () => {
  it('loading', () => {
    const props = {
      loading: true,
    }
    const { container } = render(<BookList {...props} />)
    const content = container.querySelector('p')
    expect(content?.innerHTML).toContain('Loading')
  })

  it('error', () => {
    const props = {
      error: true,
    }
    const { container } = render(<BookList {...props} />)
    const content = container.querySelector('p')
    expect(content?.innerHTML).toContain('Error')
  })

  it('render books', () => {
    const props = {
      books: [
        { name: 'Refactoring', id: 1 },
        { name: 'Clean Code', id: 2 },
      ],
    }
    const { container } = renderWithRouter(<BookList {...props} />)
    const titles = [...container.querySelectorAll('.title')].map(
      (node) => node.innerHTML
    )
    expect(titles).toEqual(['Refactoring', 'Clean Code'])
  })
})
