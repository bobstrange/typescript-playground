import React, { FC, useEffect, useState } from 'react'

import { BookList } from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'
import { TextField } from '@material-ui/core'

export const BookListContainer: FC = () => {
  const [word, setWord] = useState('')

  const { data, loading, error, setUrl } = useRemoteService({
    initialUrl: 'http://localhost:8080/books',
    initialData: [],
  })

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${word}`)
  }, [word])

  return (
    <>
      <TextField
        label="Search"
        value={word}
        data-test="search"
        onChange={(e) => setWord(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <BookList books={data} loading={loading} error={error} />
    </>
  )
}
