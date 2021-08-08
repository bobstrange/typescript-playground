import React from 'react'
import { Typography } from '@material-ui/core'

import { BookList } from './components/BookList'

function App() {
  const books = [{ name: 'Refactoring' }, { name: 'Clean Code' }]

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
