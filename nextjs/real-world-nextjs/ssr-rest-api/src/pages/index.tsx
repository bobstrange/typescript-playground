import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import axios from "axios"
import { Photo } from "../types"

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")

  return {
    props: {
      photos: res.data,
    },
  }
}

const Home: NextPage<{ photos: Photo[] }> = ({ photos }) => {
  return (
    <ul>
      <li>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </li>
      <li>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
