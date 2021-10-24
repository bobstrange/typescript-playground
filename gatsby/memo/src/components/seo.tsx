import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export type SeoProps = {
  title: string
  description: string
  image: string
  path: string
}

export const Seo: React.FC<Partial<SeoProps>> = (props) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `)

  const defaults = data?.site?.siteMetadata
  const title = props.title || defaults.title
  const description = props.description || defaults.title
  const image = new URL(props.image || defaults.image, defaults.siteUrl)
  const url = new URL(props.path || '/', defaults.siteUrl)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.href} />
      {image && <meta name="image" content={image.href} />}

      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image.href} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image.href} />}
    </Helmet>
  )
}
