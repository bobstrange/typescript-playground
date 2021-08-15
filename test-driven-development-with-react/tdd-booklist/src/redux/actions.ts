import { red } from '@material-ui/core/colors'
import axios from 'axios'

export const setSearchWord = (word: string) => {
  return {
    type: 'SET_SEARCH_WORD',
    word,
  }
}

export const fetchBooks = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_BOOKS_PENDING' })
    const res = await axios.get(`http://localhost:8080/books`)
    dispatch({ type: 'FETCH_BOOKS_SUCCESS', books: res.data })
  }
}
