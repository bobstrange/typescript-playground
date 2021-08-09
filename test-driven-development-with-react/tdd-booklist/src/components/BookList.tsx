import React, { FC } from 'react'

type Props = {
  books?: {
    id: number
    name: string
  }[]
  loading?: boolean
  error?: boolean
}

export const BookList: FC<Props> = ({ books, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <div data-test="book-list">
      {(books || []).map((book) => (
        <div className="book-item" key={book.name}>
          <h2 className="title">{book.name}</h2>
          <a href={`/books/${book.id}`}>View Details</a>
        </div>
      ))}
    </div>
  )
}
