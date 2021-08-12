import React, { FC } from 'react'

import { Book } from '../types/Book'
type Props = {
  book: Book
}

const getDescription = (book: Book) => {
  return book.description ? book.description : book.name
}
export const BookDetail: FC<Props> = ({ book }) => {
  return (
    <div className="book-detail">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description">{getDescription(book)}</p>
    </div>
  )
}
