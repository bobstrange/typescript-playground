import { render, screen, within } from '../utils/test-utils'
import { ArticleList } from './ArticleList'
import { articles } from '../test/fixture'

test('show articles', () => {
  render(<ArticleList items={articles} />)

  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
  expect(within(list).getAllByRole('listitem')).toHaveLength(articles.length)
})
