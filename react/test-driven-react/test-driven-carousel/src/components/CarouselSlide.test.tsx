import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CarouselSlide } from './CarouselSlide'

describe('CarouselSlide', () => {
  it('renders <figure>', () => {
    render(<CarouselSlide />)
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })
})
