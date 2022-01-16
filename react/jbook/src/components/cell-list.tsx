import { useTypedSelector } from '../hooks/user-typed-selector'

import { CellListItem } from './cell-list-item'

export const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells }) => {
    const data = cells!.data
    const order = cells!.order
    return order.map((id) => {
      return data[id]
    })
  })

  const renderedCells = cells.map((cell) => (
    <CellListItem cell={cell} key={cell.id} />
  ))

  return <div>{renderedCells}</div>
}
