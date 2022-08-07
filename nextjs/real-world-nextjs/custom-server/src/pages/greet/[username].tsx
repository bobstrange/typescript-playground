import { NextPage, GetServerSideProps } from "next"

type Props = {
  username: string
}

type Query = {
  username: string
}

export const getServerSideProps: GetServerSideProps<Props, Query> = ({
  params,
}) => {
  return {
    props: {
      username: params?.username,
    },
  }
}

const UserPage: NextPage<Props> = ({ username }) => {
  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  )
}

export default UserPage
