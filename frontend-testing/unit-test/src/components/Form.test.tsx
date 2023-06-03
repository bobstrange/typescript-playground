import { fireEvent, render, screen } from '../utils/test-utils'
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

test('event handler is called when button is clicked', () => {
  const mockFn = vi.fn()
  render(<Form name="John Doe" onSubmit={mockFn} />)
  fireEvent.click(screen.getByRole('button'))
  expect(mockFn).toHaveBeenCalled()
})
