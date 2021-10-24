import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

type Props = {
  data: {
    sanityEpisode: {
      title: string
      description: string
      slug: {
        current: string
      }
      youtubeID: string
      date: string
      image: {
        asset: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}
export const SanityEpisode: React.FC<Props> = ({ data }) => {
  const episode = data.sanityEpisode
  return (
    <Layout title={episode.title} description={episode.description}>
      <GatsbyImage
        image={episode.image.asset.gatsbyImageData}
        alt={episode.title}
      />
      <h1>{episode.title}</h1>
      <p>
        (posted {episode.date} - {episode.description})
      </p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            Full episode and details
          </a>
        </li>
        <li>
          <a href={`https://www.youtube.com/watch?v=${episode.youtubeID}`}>
            Watch on YouTube
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default SanityEpisode
