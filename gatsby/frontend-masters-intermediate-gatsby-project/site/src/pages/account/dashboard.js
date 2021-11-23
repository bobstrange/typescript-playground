import * as React from 'react'
import { navigate } from 'gatsby'

async function checkAuth(setLoginStatus) {
  const { loggedIn } = await fetch('/api/check-auth').then((res) => res.json())
  setLoginStatus(loggedIn)
}

async function logout() {
  const { status } = await fetch('/api/logout').then((res) => res.json())

  if (status !== 'ok') {
    throw new Error(status)
  }

  navigate('/account/login')
}

const DashboardPage = () => {
  const [loginStatus, setLoginStatus] = React.useState()

  React.useEffect(() => {
    checkAuth(setLoginStatus)
  }, [])

  if (loginStatus === false) {
    navigate('/account/login', { replace: true })
    return null
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default DashboardPage
