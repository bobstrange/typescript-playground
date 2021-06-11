import React, { FC } from 'react'
import Link from 'next/link'

const IndexPage: FC = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
)

export default IndexPage
