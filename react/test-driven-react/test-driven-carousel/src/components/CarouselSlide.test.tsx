import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CarouselSlide } from './CarouselSlide'

describe('CarouselSlide', () => {
  beforeEach(() => {
    render(<CarouselSlide />)
  })

  it('renders <figure>', () => {
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })

  it('renders an <img> and a <figcaption>', () => {
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('figcaption')).toBeInTheDocument()
  })
})
