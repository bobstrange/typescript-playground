/** @jsxImportSource @emotion/react */

import Head from 'next/head'
import Link from 'next/link'

import * as utilStyles from '../styles/utils'
import Layout, { siteTitle } from '../components/layout'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import { Date } from '../components/date'
import { blockStatement } from '@babel/types'

export const getStaticProps: GetStaticProps<{ allPostsData: Post[] }> = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

type Post = {
  date: string
  title: string
  id: string
}

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section css={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus minus commodi
          ex quisquam optio totam doloremque consequuntur officia dolorem quo nihil cumque, tempore
          iste ut placeat, magni, veritatis ipsam?
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section css={{ ...utilStyles.headingMd, ...utilStyles.padding1px }}>
        <h2 css={utilStyles.headingLg}>Blog</h2>
        <ul css={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} css={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>
                <a css={{ display: 'block' }}>{title}</a>
              </Link>

              <small css={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
