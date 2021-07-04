/** @jsxImportSource @emotion/react */

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import * as utilStyles from '../styles/utils'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
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
    </Layout>
  )
}
