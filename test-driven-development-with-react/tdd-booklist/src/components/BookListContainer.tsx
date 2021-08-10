import React, { FC } from 'react'

import { BookList } from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'

export const BookListContainer: FC = () => {
  const { data, loading, error } = useRemoteService({
    url: 'http://localhost:8080/books',
    initialData: [],
  })
  return <BookList books={data} />
}
