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

  console.log('cells:', cells.length)
  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ))

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  )
}
