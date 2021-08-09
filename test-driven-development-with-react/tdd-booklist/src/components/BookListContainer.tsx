import React, { FC } from 'react'

import { BookList } from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'

export const BookListContainer: FC = () => {
  const { data, loading, error } = useRemoteService([])
  return <BookList books={data} />
}
