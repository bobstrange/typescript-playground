import * as types from './action_types'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_PENDING:
      return { ...state, loading: true }
    case types.FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books }
    default:
      return state
  }
}
