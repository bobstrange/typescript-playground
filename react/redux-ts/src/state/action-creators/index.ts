import axios from 'axios'
import { Dispatch } from 'react'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const searchRepositories = (text: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES })

    try {
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=${text}`
      )
      const names = data.objects.map((item: any) => item.package.name)
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      })
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      })
    }
  }
}
