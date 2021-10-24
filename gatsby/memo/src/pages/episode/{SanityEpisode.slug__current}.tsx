import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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

export const SanityEpisode = ({ data }) => {
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export default SanityEpisode
