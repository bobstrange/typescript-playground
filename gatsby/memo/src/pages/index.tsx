import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { Layout } from '../components/layout'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(fromNow: true)
            title
            date(fromNow: true)
          }
          id
          slug
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <>
      <Layout>
        <main>
          <h1>Programming memo</h1>
          <Link to="/about">About this site</Link>

          <h2>Recent posts</h2>
          <ul>
            {posts.map((post: any) => (
              <li key={post.id}>
                <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
                <small>posted {post.frontmatter.date}</small>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </>
  )
}
