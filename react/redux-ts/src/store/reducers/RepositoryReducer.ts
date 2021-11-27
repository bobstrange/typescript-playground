type RepositoriesState = {
  loading: boolean
  error: string | null
  data: string[]
}

type SearchRepositoriesAction = {
  type: ActionType.SEARCH_REPOSITORIES
}

type SearchRepositoriesSuccessAction = {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS
  payload: string[]
}

type SearchRepositoriesErrorAction = {
  type: ActionType.SEARCH_REPOSITORIES_ERROR
  payload: string
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

export const RepositoryReducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default RepositoryReducer
