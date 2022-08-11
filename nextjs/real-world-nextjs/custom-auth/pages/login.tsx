import { NextPage } from "next"
import Router from "next/router"
import { FormEventHandler, useState } from "react"

const handleLogin = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const resp = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  const data = await resp.json()
  if (data.success) {
    return
  }
  throw new Error("Wrong email or password")
}

const LoginPage: NextPage = () => {
  const [loginError, setLoginError] = useState<Error | null>(null)
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const { email, password } = event.target.elements
    setLoginError(null)
    try {
      await handleLogin({ email: email.value, password: password.value })
      Router.push("/protected-route")
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error)
      }
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
        {loginError && <p>{loginError}</p>}
      </form>
    </div>
  )
}

export default LoginPage
