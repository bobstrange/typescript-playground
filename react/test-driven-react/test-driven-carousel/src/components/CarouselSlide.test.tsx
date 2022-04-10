import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CarouselSlide } from './CarouselSlide'

describe('CarouselSlide', () => {
  const imageURL = 'https://example.com/image.png'
  const description = 'Something image'
  const attribution = 'Someone'

  beforeEach(() => {
    render(
      <CarouselSlide
        imageURL={imageURL}
        description={description}
        attribution={attribution}
      />
    )
  })

  it('renders <figure>', () => {
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })

  it('passes `imgURL` through to the <img>', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', imageURL)
  })

  it('uses `description` and `attribution` as the <figcaption>', () => {
    expect(screen.getByText(`${description}`)).toBeInTheDocument()
    expect(screen.getByText(`${attribution}`)).toBeInTheDocument()
  })
})
