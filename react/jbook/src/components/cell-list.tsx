import { useTypedSelector } from '../hooks/user-typed-selector'

import { CellListItem } from './cell-list-item'
import { AddCell } from './add-cell'

export const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells }) => {
    const data = cells!.data
    const order = cells!.order
    return order.map((id) => {
      return data[id]
    })
  })

  const renderedCells = cells.map((cell) => (
    <>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} key={cell.id} />
    </>
  ))

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  )
}
