import { render, screen, userEvent } from '../utils/test-utils'
import { Form } from './Form'

const user = userEvent.setup()

test('Signup button is disabled when the checkbox is not checked', () => {
  render(<Form />)
  expect(screen.getByRole('button', { name: 'Signup' })).toBeDisabled()
})

test('Signup button is enabled when the ToS is checked', async () => {
  render(<Form />)
  await user.click(screen.getByRole('checkbox'))
  expect(screen.getByRole('button', { name: 'Signup' })).toBeEnabled()
})
