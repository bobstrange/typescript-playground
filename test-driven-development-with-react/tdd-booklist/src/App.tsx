import React from 'react'
import { Typography } from '@material-ui/core'

type Book = {
  name: string
}

const renderBooks = (books: Book[]): JSX.Element[] => {
  return books.map((book) => (
    <div className="book-item" key={book.name}>
      <h2 className="title">{book.name}</h2>
    </div>
  ))
}

function App() {
  const books = [{ name: 'Refactoring' }, { name: 'Clean Code' }]

  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        TDD Booklist
      </Typography>
      <div data-test="book-list">{renderBooks(books)}</div>
    </div>
  )
}

export default App
