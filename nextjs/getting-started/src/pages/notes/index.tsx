import React, { FC } from 'react'
import Link from 'next/link'

const NoteIndex: FC = () => (
  <div>
    <h1>Note Index</h1>
    <Link href="/notes/[id]" as="/notes/1">
      <a>Note 1</a>
    </Link>
  </div>
)

export default NoteIndex
