import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

import { setSearchWord, fetchBooks } from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BookListContainer related actions', () => {
  it('Sets the search keyword', () => {
    const word = ''
    const expected = {
      type: 'SET_SEARCH_WORD',
      word,
    }
    const action = setSearchWord(word)
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
      { type: 'FETCH_BOOKS_PENDING' },
      { type: 'FETCH_BOOKS_SUCCESS', books },
    ]
    const store = mockStore({ books: [] })
    await store.dispatch(fetchBooks())
    expect(store.getActions()).toEqual(expectedActions)
  })
})
