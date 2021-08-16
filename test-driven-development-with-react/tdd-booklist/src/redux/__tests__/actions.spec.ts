import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

import { setSearchWord, fetchBooks } from '../actions'
import * as types from '../action_types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BookListContainer related actions', () => {
  it('Sets the search keyword', () => {
    const searchWord = ''
    const expected = {
      type: types.SET_SEARCH_WORD,
      searchWord,
    }
    const action = setSearchWord(searchWord)
    expect(action).toEqual(expected)
  })

  it('Fetches data successfully', async () => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Clean Code', id: 2 },
      { name: 'Clean Architecture', id: 3 },
    ]
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }))

    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_SUCCESS, books },
    ]
    const store = mockStore({ books: [] })
    await store.dispatch(fetchBooks())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('Fetch data with error', async () => {
    axios.get = jest
      .fn()
      .mockImplementation(() =>
        Promise.reject({ message: 'Something went wrong' })
      )

    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_FAILED, error: 'Something went wrong' },
    ]
    const store = mockStore({ books: [] })
    await store.dispatch(fetchBooks())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('Search data with word', async () => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Clean Code', id: 2 },
      { name: 'Clean Architecture', id: 3 },
    ]
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }))

    const store = mockStore({ books: [], searchWord: 'Refactoring' })
    await store.dispatch(fetchBooks())
    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:8080/books?q=Refactoring'
    )
  })
})
