import MDEditor from '@uiw/react-md-editor'
import React, { useEffect, useState } from 'react'

export const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const listener = () => {
      setEditing(false)
    }
    document.addEventListener('click', listener, { capture: true })

    return () => {
      document.removeEventListener('click', listener, { capture: true })
    }
  }, [])

  if (editing) {
    return <MDEditor />
  }

  return (
    <div onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={'# Heading 1'} />
    </div>
  )
}
