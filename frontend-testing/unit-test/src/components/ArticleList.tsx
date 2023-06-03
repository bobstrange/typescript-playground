import { ItemProps, ArticleListItem } from './ArticleListItem'

type Props = {
  items: ItemProps[]
}

export const ArticleList = ({ items }: Props) => {
  return (
    <div>
      <h2>Articles</h2>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <ArticleListItem {...item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>No article</p>
      )}
    </div>
  )
}
