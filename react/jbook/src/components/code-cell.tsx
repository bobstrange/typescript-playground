import { useEffect, useState } from 'react'
import { CodeEditor } from './code-editor'
import { Preview } from './preview'
import { bundle } from '../bundler'
import { Resizable } from './resizable'
import { Cell } from '../state'
import { useActions } from '../hooks/use-actions'
interface CodeCellProps {
  cell: Cell
}

export const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')

  const { updateCell } = useActions()

  useEffect(() => {
    const timer = setTimeout(async () => {
      const { code, error } = await bundle(cell.content)
      setCode(code)
      setErr(error)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [cell.content])

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => {
              updateCell(cell.id, value)
            }}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  )
}
