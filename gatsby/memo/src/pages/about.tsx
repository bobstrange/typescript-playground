import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'

export default function AboutPage() {
  return (
    <>
      <Layout title="About this site" description="About this site">
        <h1>About This Site</h1>
        <Link to="/">Back to home</Link>
      </Layout>
    </>
  )
}
