import React from 'react'
import { render } from '@testing-library/react'

import { BookDetail } from '../BookDetail'

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        id: 1,
        name: 'Refactoring',
      },
    }

    const { container } = render(<BookDetail {...props} />)
    const title = container.querySelector('.book-title')
    expect(title?.innerHTML).toEqual(props.book.name)
  })

  it('renders description', () => {
    const props = {
      book: {
        id: 1,
        name: 'Refactoring',
        description: 'Refactoring: Improving the Design of Existing Code',
      },
    }

    const { container } = render(<BookDetail {...props} />)
    const title = container.querySelector('.book-description')
    expect(title?.innerHTML).toEqual(props.book.description)
  })
})
