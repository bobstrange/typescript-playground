import React from 'react'
import { Typography } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        TDD Booklist
      </Typography>
      <div data-test="book-list">
        <div className="book-item">Refactoring</div>
        <div className="book-item">Clean Code</div>
      </div>
    </div>
  )
}

export default App
