import { Provider } from 'react-redux'
import { store } from './state'

import { RepositoriesList } from './components/RepositoriesList'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a npm package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
