import React, { FC } from 'react'
import { useParams } from 'react-router'

import { Book } from '../types/Book'
import { useRemoteService } from '../hooks/useRemoteService'
import { BookDetail } from './BookDetail'

export const BookDetailContainer: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data } = useRemoteService({
    initialUrl: `http://localhost:8080/books/${id}`,
    initialData: {} as Book,
  })

  return <BookDetail book={data} />
}
