import React, { FC } from 'react'

export type Book = {
  name: string
}

export const BookList: FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.name}>
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  )
}
