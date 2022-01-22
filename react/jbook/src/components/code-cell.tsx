import { useEffect } from 'react'
import { CodeEditor } from './code-editor'
import { Preview } from './preview'
import { Resizable } from './resizable'
import { Cell } from '../state'
import { useActions } from '../hooks/use-actions'
import { useTypedSelector } from '../hooks/user-typed-selector'

interface CodeCellProps {
  cell: Cell
}

export const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions()
  const bundle = useTypedSelector((state) => state.bundles![cell.id])

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cell.content)
      return
    }
    const timer = setTimeout(() => {
      createBundle(cell.id, cell.content)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, cell.content, createBundle])

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 15px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => {
              updateCell(cell.id, value)
            }}
          />
        </Resizable>
        {bundle && <Preview code={bundle.code} err={bundle.err} />}
      </div>
    </Resizable>
  )
}
