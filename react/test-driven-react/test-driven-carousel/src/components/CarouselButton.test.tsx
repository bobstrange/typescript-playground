import { describe, expect, it } from 'vitest'
import { CarouselButton } from './CarouselButton'
import { render, screen } from '@testing-library/react'

describe('CarouselButton', () => {
  it('renders <button />', () => {
    render(<CarouselButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders children component', () => {
    const text = 'Button Text'
    render(<CarouselButton>{text}</CarouselButton>)
    expect(screen.getByText('Button Text')).toBeInTheDocument()
  })
})
