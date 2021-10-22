import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

export const query = graphql`
  query AboutImageQuery {
    file(name: { eq: "cyclist" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`
type Props = {
  data: {
    file: IGatsbyImageData
  }
}
export const AboutPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Layout title="About this site" description="About this site">
        <GatsbyImage
          image={getImage(data.file) as IGatsbyImageData}
          alt="image"
        />
        <h1>About This Site</h1>
        <Link to="/">Back to home</Link>
      </Layout>
    </>
  )
}

export default AboutPage
