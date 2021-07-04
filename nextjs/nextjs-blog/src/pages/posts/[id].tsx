/** @jsxImportSource @emotion/react */

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import { Date } from '../../components/date'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import * as utilStyles from '../../styles/utils'

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getAllPostIds()
  const paths = ids.map((id) => {
    return {
      params: {
        id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}

const Post: FC<{ postData: { title: string; date: string; contentHtml: string } }> = ({
  postData,
}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1 css={utilStyles.headingLg}>{postData.title}</h1>
      <Date dateString={postData.date}></Date>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export default Post
