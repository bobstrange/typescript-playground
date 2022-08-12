import type { NextPage } from "next"
import { useUser } from "@auth0/nextjs-auth0"
import Link from "next/link"

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (user) {
    return (
      <div>
        <h1>Welcome</h1>
        <pre>{JSON.stringify(user)}</pre>
      </div>
    )
  }
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Please login{" "}
        <Link href="/api/auth/login" passHref>
          <a>Login</a>
        </Link>
      </p>
    </div>
  )
}

export default Home
