/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import { FC } from 'react'
import { useRouter } from 'next/router'

const NoteIndex: FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note {id}</h1>
    </div>
  )
}

export default NoteIndex
