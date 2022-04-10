import { describe, expect, it } from 'vitest'
import { CarouselButton } from './CarouselButton'
import { render, screen } from '@testing-library/react'

describe('CarouselButton', () => {
  it('renders <button />', () => {
    render(<CarouselButton />)
    expect(screen.getByRole('button')).toBeDefined()
  })
})
