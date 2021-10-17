import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'

type Props = {
  pageContext: {
    frontMatter: Record<string, string | undefined>
  }
}
export const PostLayout: React.FC<Props> = ({ children, pageContext }) => {
  const frontMatter = pageContext.frontMatter
  const title = frontMatter?.title
  const description = frontMatter?.description

  return (
    <Layout title={title} description={description}>
      {children}
    </Layout>
  )
}

export default PostLayout
