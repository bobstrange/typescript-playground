import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Book } from '../types/Book'

type Args<T> = {
  initialUrl: string
  initialData: T
}

export const useRemoteService = <T extends Book[] | Book>({
  initialUrl,
  initialData,
}: Args<T>): {
  data: T
  loading: boolean
  error: boolean
  setUrl: React.Dispatch<React.SetStateAction<string>>
} => {
  const [data, setData] = useState<T>(initialData)
  const [url, setUrl] = useState(initialUrl)
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
  }, [url])

  return { data, loading, error, setUrl }
}
