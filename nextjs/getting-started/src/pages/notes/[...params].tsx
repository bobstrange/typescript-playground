import React, { FC } from 'react'
import { useRouter } from 'next/router'

const NoteIndex: FC = () => {
  const router = useRouter()
  const { params } = router.query
  console.log(params)

  return <h1>Note {params}</h1>
}

export default NoteIndex
