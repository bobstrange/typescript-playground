import * as React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/layout'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <main>
          <h1>Programming memo</h1>
          <p>My programming memo</p>
          <Link to="/about">About this site</Link>
        </main>
      </Layout>
    </>
  )
}
