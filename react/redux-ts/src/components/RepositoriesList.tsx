import { useState } from 'react'
import { useActions } from '../hooks/useActions'

export const RepositoriesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { searchRepositories } = useActions()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(searchTerm)
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
