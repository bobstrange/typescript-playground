import { screen, render } from '../utils/test-utils'
import { Agreement } from './Agreement'

test('fieldset accessible name quotes legend', () => {
  render(<Agreement />)
  expect(screen.getByRole('group', { name: 'ToS Agreement' })).toBeInTheDocument()
})
