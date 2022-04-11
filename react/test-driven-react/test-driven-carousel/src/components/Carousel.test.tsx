import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders "Prev" button', () => {
    render(<Carousel />)
    expect(screen.getByText('Prev')).toBeInTheDocument()
  })
})
