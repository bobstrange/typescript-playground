import { render, screen } from '../utils/test-utils'
import { ArticleListItem } from './ArticleListItem'

test('show link', () => {
  render(<ArticleListItem id="1" title="title" body="body" />)
  expect(screen.getByRole('link')).toHaveAttribute('href', '/articles/1')
})
