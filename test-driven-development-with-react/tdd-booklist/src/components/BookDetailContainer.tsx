import React, { FC } from 'react'
import { useParams } from 'react-router'

import { Book } from '../types/Book'
import { useRemoteService } from '../hooks/useRemoteService'

export const BookDetailContainer: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data } = useRemoteService({
    url: `http://localhost:8080/books/${id}`,
    initialData: {} as Book,
  })

  return <h2 className="book-title">{data.name}</h2>
}
