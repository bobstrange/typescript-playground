import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Layout } from '../components/layout'
import { imageWrapper } from '../styles/index.module.css'

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
      allSanityEpisode(
        sort: { fields: date, order: DESC }
        filter: { youtubeID: { ne: null } }
        limit: 10
      ) {
        nodes {
          id
          title
          guest {
            name
          }
          gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
        }
      }
    }
  `)

  const posts = data.allMdx.nodes
  const episodes = data.allSanityEpisode.nodes

  return (
    <>
      <Layout>
        <div className={imageWrapper}>
          <StaticImage
            src="../images/cyclist.jpg"
            alt="A cyclist"
            placeholder="tracedSVG"
            width={300}
            height={300}
          />
        </div>
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
        <h2>Latest episodes</h2>
        <ul>
          {episodes.map((episode: any) => (
            <li key={episode.id}>
              <Link to={episode.gatsbyPath}>
                {episode.title} (with {episode.guest?.[0]?.name})
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}
