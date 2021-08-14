import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchBox } from '../SearchBox'

describe('SearchBox', () => {
  it('renders input', () => {
    const props = {
      word: '',
      onSearch: jest.fn(),
    }
    const { container } = render(<SearchBox {...props} />)
    const input = container.querySelector('input[type="text"]')
    userEvent.type(input, 'Refactoring')
    expect(props.onSearch).toHaveBeenCalled()
  })
})
