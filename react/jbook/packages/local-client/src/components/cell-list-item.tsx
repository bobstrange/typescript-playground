import { Cell } from '../state'
import { CodeCell } from './code-cell'
import { TextEditor } from './text-editor'
import { ActionBar } from './action-bar'

import './cell-list-item.css'

interface CellListItemProps {
  cell: Cell
}

export const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element
  if (cell.type === 'code') {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar cellId={cell.id} />
        </div>

        <CodeCell cell={cell} />
      </>
    )
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar cellId={cell.id} />
      </>
    )
  }
  return <div className="cell-list-item">{child}</div>
}
