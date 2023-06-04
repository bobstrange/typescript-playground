import { screen, render, fireEvent } from '../utils/test-utils'
import { Agreement } from './Agreement'

test('fieldset accessible name quotes legend', () => {
  render(<Agreement />)
  expect(screen.getByRole('group', { name: 'ToS Agreement' })).toBeInTheDocument()
})

test('checkbox is not checked by default', () => {
  render(<Agreement />)
  expect(screen.getByRole('checkbox')).not.toBeChecked()
})

test('checkbox is checked when clicked', () => {
  render(<Agreement />)
  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
})
