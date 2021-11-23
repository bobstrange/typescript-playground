import * as React from 'react'
import { navigate } from 'gatsby'

import { form, input, button } from '../../styles/search.module.css'

const SearchClientOnly = ({ params }) => {
  const query = decodeURIComponent(params['*'])

  const [currentQuery, setCurrentQuery] = React.useState(query)
  const [result, setResult] = React.useState(null)
  const [status, setStatus] = React.useState('IDLE')

  function handleSearch(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    const query = form.get('search')
    setCurrentQuery(query)
    navigate(`/search/${encodeURIComponent(query)}`)
  }

  function handleSearchReset() {
    setCurrentQuery('')
    navigate('/search')
  }

  async function bookSearch(query) {}

  React.useEffect(() => {
    if (currentQuery === '') {
      setResult(null)
      return
    }

    bookSearch(currentQuery)
  }, [currentQuery])

  return (
    <>
      <h1>Search for a book</h1>
      <form className={form} onSubmit={handleSearch}>
        <input type="search" name="search" className={input} />
        <button className={button} type="submit">
          search
        </button>
        <button className={button} type="reset" onClick={handleSearchReset}>
          reset
        </button>
      </form>
    </>
  )
}

export default SearchClientOnly
