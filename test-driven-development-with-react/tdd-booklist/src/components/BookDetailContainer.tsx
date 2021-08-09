import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import { Book } from '../types/Book'

export const BookDetailContainer: FC = () => {
  const { id } = useParams<{ id: string }>()
  const [bookId, _] = useState(id)
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get<Book>(`http://localhost:8080/books/${bookId}`)
      setBook(res.data)
    }
    fetchBook()
  }, [bookId])

  if (!book) {
    return null
  }
  return <h2 className="book-title">{book.name}</h2>
}
