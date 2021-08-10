import axios from 'axios'
import { useEffect, useState } from 'react'

import { Book } from '../types/Book'

type Args = {
  url: string
  initialData: Book[]
}

export const useRemoteService = ({
  url,
  initialData,
}: Args): {
  data: Book[]
  loading: boolean
  error: boolean
} => {
  const [data, setData] = useState<Book[]>(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(false)
      try {
        const res = await axios.get<Book[]>(url)
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
