import { useEffect, useState } from "react"
import Link from "next/link"
import { GetServerSideProps, NextPage } from "next"
import { User } from "../../types"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query
  return {
    props: {
      id,
    },
  }
}

const UserData: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <b>Username: </b> {user.username}
      </div>
      <div>
        <b>Email: </b> {user.email}
      </div>
    </div>
  )
}

const UserPage: NextPage<{ id: string }> = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<User | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<User>(`/api/singleUser?id=${id}`)
      setLoading(false)
      setData(res.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <Link href="/" passHref>
          <a>Back to home</a>
        </Link>
      </div>
      <hr />
      {loading && <div>Loading user...</div>}
      {data && <UserData user={data} />}
    </div>
  )
}

export default UserPage
