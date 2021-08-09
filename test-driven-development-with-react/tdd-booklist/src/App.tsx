import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Typography } from '@material-ui/core'

import { BookListContainer } from './components/BookListContainer'
import { BookDetailContainer } from './components/BookDetailContainer'

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        TDD Booklist
      </Typography>
      <Route exact path="/" component={BookListContainer} />
      <Route path="/books/:id" component={BookDetailContainer} />
    </div>
  )
}

export default App
