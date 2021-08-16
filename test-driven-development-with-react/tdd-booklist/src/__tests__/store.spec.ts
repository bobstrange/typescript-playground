import axios from 'axios'

import { fetchBooks } from '../redux/actions'
import { store } from '../store'

describe('Store', () => {
  const books = [{ id: 1, name: 'Refactoring' }]

  it('fetch books', async () => {
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }))

    await store.dispatch(fetchBooks())
    const state = store.getState()
    expect(state.books.length).toBe(1)
    expect(state.books).toEqual(books)
  })
})
