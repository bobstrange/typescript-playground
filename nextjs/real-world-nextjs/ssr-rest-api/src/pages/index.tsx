import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import axios from "axios"
import { Photo } from "../types"

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos")

  return {
    props: {
      photos: res.data,
    },
  }
}

const Home: NextPage<{ photos: Photo[] }> = ({ photos }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <Link href={`/photos/${photo.id}`} passHref>
            <a>{photo.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Home
