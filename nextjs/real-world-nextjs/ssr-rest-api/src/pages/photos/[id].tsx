import axios from "axios"
import { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import { Photo } from "../../types"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  )
  return {
    props: {
      photo: res.data,
    },
  }
}

const PhotoPage: NextPage<{ photo: Photo }> = ({ photo }) => {
  return (
    <div>
      <div>
        <Link href="/" passHref>
          Back to Home
        </Link>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <img src={photo.url} alt={photo.title} width={150} height={150} />
        <div>
          <b>Photo title:</b> {photo.title}
        </div>
      </div>
    </div>
  )
}

export default PhotoPage
