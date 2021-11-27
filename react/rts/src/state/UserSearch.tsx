import { useState } from 'react'

const users = [
  { name: 'Bob', age: 30 },
  { name: 'Tom', age: 20 },
  { name: 'Alice', age: 25 },
  { name: 'Kate', age: 27 },
]

export const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const foundUser = users.find((user) => user.name === name)
    setUser(foundUser)
  }

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>search</button>
      <div>{user ? user.name : `User ${name} not found`}</div>
    </div>
  )
}
