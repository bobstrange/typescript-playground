import { useTypedSelector } from '../hooks/user-typed-selector'
import { CellListItem } from './cell-list-item'
import { AddCell } from './add-cell'
import { Fragment } from 'react'

export const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells }) => {
    const data = cells!.data
    const order = cells!.order
    return order.map((id) => {
      return data[id]
    })
  })

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ))

  return (
    <div>
      <AddCell previousCellId={null} forceVisible={cells.length === 0} />
      {renderedCells}
    </div>
  )
}
