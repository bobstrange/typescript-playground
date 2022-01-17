import { useActions } from '../hooks/use-actions'

interface ActionBarProps {
  cellId: string
}

export const ActionBar: React.FC<ActionBarProps> = ({ cellId }) => {
  const { moveCell, deleteCell } = useActions()

  return (
    <div>
      <button onClick={() => moveCell(cellId, 'up')}>Up</button>
      <button onClick={() => moveCell(cellId, 'down')}>Down</button>
      <button onClick={() => deleteCell(cellId)}>Delete</button>
    </div>
  )
}
