import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  return {
    props: {
      users: res.data,
    },
  }
}

type User = {
  id: string
  username: string
}

const Home: NextPage<{ users: User[] }> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            <a>{user.username}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Home
