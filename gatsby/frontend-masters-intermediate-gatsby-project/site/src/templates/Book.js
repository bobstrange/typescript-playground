import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { listing, heading } from '../styles/Book.module.css'

export const query = graphql`
  query BookPage($id: String!) {
    book(id: { eq: $id }) {
      name
      author {
        name
        slug
      }
      series
      seriesOrder
      cover {
        childImageSharp {
          gatsbyImageData(width: 150)
        }
      }
    }
  }
`

const BookPage = ({ data }) => {
  const book = data.book

  return (
    <>
      <div className={listing}>
        <GatsbyImage image={getImage(book.cover)} alt={book.name} />
        <h1 className={heading}>{book.name}</h1>
        <p>
          Author:{' '}
          <Link to={`/authors/${book.author.slug}`}>{book.author.name}</Link>
        </p>
        {book.series && (
          <p>
            This is book {book.seriesOrder} of the {book.series}
          </p>
        )}
      </div>
      <Link to="/books">&larr; back to all books</Link>
    </>
  )
}

export default BookPage
