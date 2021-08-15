import { reducer } from '../reducer'
import * as types from '../action_types'

describe('Reducer', () => {
  it('Show loading when request is sent', () => {
    const initState = { loading: false }

    const action = { type: types.FETCH_BOOKS_PENDING }
    const state = reducer(initState, action)
    expect(state.loading).toBeTruthy()
  })

  it('Add books to state when request successful', () => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Clean Code', id: 2 },
      { name: 'Clean Architecture', id: 3 },
    ]
    const action = { type: types.FETCH_BOOKS_SUCCESS, books }
    const state = reducer({}, action)
    expect(state.books).toEqual(books)
  })
})
