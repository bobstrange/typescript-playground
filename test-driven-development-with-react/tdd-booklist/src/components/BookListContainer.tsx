import React, { FC, useEffect, useState } from 'react'

import { BookList } from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'

import { SearchBox } from './SearchBox'

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
      <SearchBox word={word} onSearch={(e) => setWord(e.target.value)} />
      <BookList books={data} loading={loading} error={error} />
    </>
  )
}
