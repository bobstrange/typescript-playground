type RepositoriesState = {
  loading: boolean
  error: string | null
  data: string[]
}

type Action = {
  type: string
  payload?: any
}

export const RepositoryReducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case 'SEARCH_REPOSITORIES':
      return { loading: true, error: null, data: [] }
    case 'SEARCH_REPOSITORIES_SUCCESS':
      return { loading: false, error: null, data: action.payload }
    case 'SEARCH_REPOSITORIES_ERROR':
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default RepositoryReducer
