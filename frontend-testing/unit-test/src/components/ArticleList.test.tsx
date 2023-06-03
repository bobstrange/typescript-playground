import { render, screen } from '../utils/test-utils'
import { ArticleList } from './ArticleList'
import { articles } from '../test/fixture'

test('show articles', () => {
  render(<ArticleList items={articles} />)

  expect(screen.getByRole('list')).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(articles.length)
})
