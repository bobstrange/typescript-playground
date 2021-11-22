import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const AuthorsPage = () => {
  const data = useStaticQuery(graphql`
    query GetAllAuthors {
      allAuthor {
        nodes {
          name
          slug
        }
      }
    }
  `)
  const authors = data.allAuthor.nodes

  return (
    <>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.slug}>
            <Link to={`/authors/${author.slug}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AuthorsPage
