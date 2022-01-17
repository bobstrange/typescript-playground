import { useActions } from '../hooks/use-actions'
import { ActionButton } from './action-button'
interface ActionBarProps {
  cellId: string
}

export const ActionBar: React.FC<ActionBarProps> = ({ cellId }) => {
  const { moveCell, deleteCell } = useActions()

  return (
    <div>
      <ActionButton
        iconClassName="fa-arrow-up"
        onClick={() => moveCell(cellId, 'up')}
      />
      <ActionButton
        iconClassName="fa-arrow-down"
        onClick={() => moveCell(cellId, 'down')}
      />
      <ActionButton
        iconClassName="fa-times"
        onClick={() => deleteCell(cellId)}
      />
    </div>
  )
}
