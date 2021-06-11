import React, { FC } from 'react'
import { useRouter } from 'next/router'

const NoteIndex: FC = () => {
  const router = useRouter()
  const { id } = router.query

  return <h1>Note {id}</h1>
}

export default NoteIndex
