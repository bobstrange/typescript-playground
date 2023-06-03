import { render, screen } from '../utils/test-utils'
import { Form } from './Form'

test('name is shown', () => {
  render(<Form name="John Doe" />)
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
})

test('button is shown', () => {
  render(<Form name="John Doe" />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

test('heading is shown', () => {
  render(<Form name="John Doe" />)
  expect(screen.getByRole('heading')).toHaveTextContent('Account Info')
})
