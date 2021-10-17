import * as React from 'react'
import { Link } from 'gatsby'
import { Seo } from '../components/seo'

export default function AboutPage() {
  return (
    <>
      <Seo title="About this site" description="About this site" />
      <main>
        <h1>About This Site</h1>
        <Link to="/">Back to home</Link>
      </main>
    </>
  )
}
