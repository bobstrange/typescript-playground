import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'

export const RepositoriesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(actionCreators.searchRepositories(searchTerm))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Put a query here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
