import { useState, useEffect } from "react"

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/get-session")
        const data = await res.json()
        if (data.loggedIn) {
          setUser(data.user)
          setLoggedIn(true)
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        }
      }
      setLoading(false)
    }
    setLoading(true)
    fetchData()
  }, [])

  return {
    user,
    loggedIn,
    loading,
    error,
  }
}
