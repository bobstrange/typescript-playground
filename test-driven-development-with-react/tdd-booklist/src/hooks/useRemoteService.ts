import axios from 'axios'
import { useEffect, useState } from 'react'

type Book = {
  id: number
  name: string
}

export const useRemoteService = (
  initial: Book[]
): {
  data: Book[]
  loading: boolean
  error: boolean
} => {
  const [data, setData] = useState<Book[]>(initial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(false)
      try {
        const res = await axios.get<Book[]>('http://localhost:8080/books')
        setData(res.data)
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return { data, loading, error }
}
