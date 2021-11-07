import * as React from 'react'

import { graphql, Link } from 'gatsby'
import slugify from 'slugify'

export const query = graphql`
  query AuthorPage($id: String!) {
    author(id: { eq: $id }) {
      name
      books {
        id
        name
        series
        seriesOrder
      }
    }
  }
`

const AuthorPage = ({ data }) => {
  const { author } = data
  const { books } = author

  return (
    <div>
      <h1>{author.name}</h1>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </div>
  )
}

export default AuthorPage
