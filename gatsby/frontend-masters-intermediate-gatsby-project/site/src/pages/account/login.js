import * as React from 'react'
import { navigate } from 'gatsby'

async function checkAuth(setLoginStatus) {
  const { loggedIn } = await fetch('/api/check-auth').then((res) => res.json())
  setLoginStatus(loggedIn)
}

async function login() {
  const { status } = await fetch('/api/login').then((res) => res.json())

  if (status !== 'ok') {
    throw new Error(status)
  }

  navigate('/account/dashboard')
}

const LoginPage = () => {
  const [loginStatus, setLoginStatus] = React.useState()

  React.useEffect(() => {
    checkAuth(setLoginStatus)
  }, [])

  if (loginStatus === true) {
    navigate('/account/dashboard', { replace: true })
    return null
  }

  return <button onClick={login}>Login</button>
}

export default LoginPage
