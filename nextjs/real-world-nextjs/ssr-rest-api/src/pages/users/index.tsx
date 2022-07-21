import { NextPage } from "next"
import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { User } from "../../types"

const List: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`} passHref>
            <a>{user.username}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Users: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<User[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      )
      setLoading(false)
      setData(res.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {loading && <div>Loading users...</div>}
      {data && <List users={data} />}
    </div>
  )
}

export default Users
