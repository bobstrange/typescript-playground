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
})
