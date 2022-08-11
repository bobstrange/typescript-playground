import { NextPage } from "next"
import { useRouter } from "next/router"
import { useAuth } from "../lib/hooks/auth"

const ProtectedRoute: NextPage = () => {
  const router = useRouter()
  const { loading, error, loggedIn } = useAuth()

  if (!loading && !loggedIn) {
    router.push("/login")
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured.</p>}
      {loggedIn && (
        <>
          <h1>Protected Route</h1>
        </>
      )}
    </div>
  )
}

export default ProtectedRoute
