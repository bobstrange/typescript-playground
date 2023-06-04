import { userEvent, screen, render } from '../utils/test-utils'
import { InputAccount } from './InputAccount'

const user = userEvent.setup()

test('input mail address', async () => {
  render(<InputAccount />)
  const textbox = screen.getByRole('textbox', { name: 'Mail address' })

  const email = 'john-doe@hoge.com'
  await user.type(textbox, email)

  expect(textbox).toHaveDisplayValue(email)
})

test('input password', async () => {
  render(<InputAccount />)
  const textbox = screen.getByPlaceholderText('more than 8 characters')

  const password = 'password'
  await user.type(textbox, password)

  expect(textbox).toHaveDisplayValue(password)
})
