import { render, screen, within } from '../utils/test-utils'
import { ArticleList } from './ArticleList'
import { articles } from '../test/fixture'

test('show articles', () => {
  render(<ArticleList items={articles} />)

  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
  expect(within(list).getAllByRole('listitem')).toHaveLength(articles.length)
})

test('show no article if articles is empty', () => {
  render(<ArticleList items={[]} />)

  const list = screen.queryByRole('list')
  expect(list).not.toBeInTheDocument()
  expect(screen.getByText('No article')).toBeInTheDocument()
})
