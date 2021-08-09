import React from 'react'
import { Typography } from '@material-ui/core'

import { BookListContainer } from './components/BookListContainer'

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        TDD Booklist
      </Typography>
      <BookListContainer />
    </div>
  )
}

export default App
