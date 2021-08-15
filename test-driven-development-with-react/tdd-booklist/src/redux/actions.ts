import axios from 'axios'

import {
  FETCH_BOOKS_FAILED,
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS,
  SET_SEARCH_WORD,
} from './action_types'
export const setSearchWord = (word: string) => {
  return {
    type: SET_SEARCH_WORD,
    word,
  }
}

export const fetchBooks = (searchWord?: string) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_BOOKS_PENDING })
    try {
      const url = searchWord
        ? `http://localhost:8080/books?q=${searchWord}`
        : 'http://localhost:8080/books'
      const res = await axios.get(url)
      dispatch({ type: FETCH_BOOKS_SUCCESS, books: res.data })
    } catch (e) {
      dispatch({ type: FETCH_BOOKS_FAILED, error: 'Something went wrong' })
    }
  }
}
