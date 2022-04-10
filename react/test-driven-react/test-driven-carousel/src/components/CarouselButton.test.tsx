import { beforeEach, describe, expect, it } from 'vitest'
import { CarouselButton } from './CarouselButton'
import { render, screen } from '@testing-library/react'

describe('CarouselButton', () => {
  beforeEach(() => {
    const text = 'Button Text'
    render(<CarouselButton>{text}</CarouselButton>)
  })

  it('renders <button />', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders children component', () => {
    expect(screen.getByText('Button Text')).toBeInTheDocument()
  })
})
