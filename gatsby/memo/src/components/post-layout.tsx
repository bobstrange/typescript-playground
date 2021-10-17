import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'

type Props = {
  pageContext: {
    frontMatter: Record<string, string | undefined>
  }
}
export const PostLayout: React.FC<Props> = ({ children, pageContext }) => {
  const { title, description } = pageContext.frontMatter

  return (
    <Layout title={title} description={description}>
      {children}
    </Layout>
  )
}

export default PostLayout
