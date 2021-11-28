import { combineReducers } from 'redux'
import { repositoriesReducer } from './RepositoryReducer'

const reducers = combineReducers({
  repositories: repositoriesReducer,
})

export default reducers
