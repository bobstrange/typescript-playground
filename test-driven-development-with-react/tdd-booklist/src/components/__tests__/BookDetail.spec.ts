import React from 'react'
import { render } from '@testing-library/react'

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    }

    const { container } = render(<BookDetail {...props} />)
    const title = container.querySelector('.book-title')
    expect(title.innerHTML).toEqual(props.book.name)
  })

  it('renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description:
          'Refactoring: Improving the Design of Existing Code, renowned object technology mentor Martin Fowler breaks new ground, demystifying these master practices and demonstrating how software practitioners can realize the significant benefits of this new process.',
      },
    }

    const { container } = render(<BookDetail {...props} />)
    const title = container.querySelector('.book-description')
    expect(title.innerHTML).toEqual(props.book.description)
  })
})
