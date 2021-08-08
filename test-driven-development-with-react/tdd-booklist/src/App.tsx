import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import axios from 'axios'

import { BookList, Book } from './components/BookList'

function App() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get<Book[]>('http://localhost:8080/books')
      setBooks(res.data)
    }
    fetchBooks()
  }, [])

  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        TDD Booklist
      </Typography>
      <BookList books={books} />
    </div>
  )
}

export default App
