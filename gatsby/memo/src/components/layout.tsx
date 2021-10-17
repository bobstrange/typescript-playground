import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import '../styles/global.css'

import { Seo, SeoProps } from './seo'

export const Layout: React.FC<Partial<SeoProps>> = ({
  children,
  title = undefined,
  description = undefined,
  image = undefined,
  path = undefined,
}) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const meta = data?.site?.siteMetadata ?? {}

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
