import { describe, expect, it } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders title', () => {
    render(<App />)
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeDefined()
  })
})
