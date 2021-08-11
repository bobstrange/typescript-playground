import React, { FC } from 'react'

import { Book } from '../types/Book'
type Props = {
  book: Book & { description?: string }
}

export const BookDetail: FC<Props> = ({ book }) => {
  return (
    <div className="book-detail">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description">{book?.description}</p>)
    </div>
  )
}
