import produce from 'immer'

import { ActionType } from '../action-types'
import { Action } from '../actions'
import { Cell } from '../cell'

interface CellsState {
  loading: boolean
  error: string | null
  order: string[]
  data: Record<string, Cell>
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
}

const reducer = produce((state: CellsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL: {
      const { id, content } = action.payload
      state.data[id].content = content
      return state
    }
    case ActionType.DELETE_CELL: {
      const { id } = action.payload
      delete state.data[id]
      state.order = state.order.filter((_id) => _id !== id)
      return state
    }
    case ActionType.INSERT_CELL_BEFORE: {
      const { id, type } = action.payload
      const cell: Cell = {
        content: '',
        id: randomId(),
        type,
      }
      state.data[cell.id] = cell
      const index = state.order.findIndex((_id) => _id === id)
      if (index < 0) {
        state.order.push(cell.id)
      } else {
        state.order.splice(index, 0, cell.id)
      }
      return state
    }
    case ActionType.MOVE_CELL: {
      const { id, direction } = action.payload
      const index = state.order.findIndex((_id) => _id === id)
      const targetIndex = direction === 'up' ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= state.order.length) {
        return state
      }
      state.order[index] = state.order[targetIndex]
      state.order[targetIndex] = id
      return state
    }
    default: {
      return state
    }
  }
})

const randomId = () => {
  return Math.random().toString(36).substr(2, 5)
}

export default reducer
