import { setSearchWord } from '../actions'

describe('BookListContainer related actions', () => {
  it('Sets the search keyword', () => {
    const word = ''
    const expected = {
      type: 'SET_SEARCH_WORD',
      word,
    }
    const action = setSearchWord(word)
    expect(actoun).toEqual(expected)
  })
})
