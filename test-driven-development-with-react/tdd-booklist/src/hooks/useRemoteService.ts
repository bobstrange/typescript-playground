import axios from 'axios'
import { useEffect, useState } from 'react'

import { Book } from '../types/Book'

type Args<T> = {
  url: string
  initialData: T
}

export const useRemoteService = <T extends Book[] | Book>({
  url,
  initialData,
}: Args<T>): {
  data: T
  loading: boolean
  error: boolean
} => {
  const [data, setData] = useState<T>(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(false)
      try {
        const res = await axios.get<T>(url)
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
