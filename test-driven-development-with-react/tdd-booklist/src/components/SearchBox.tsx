import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import clone from 'lodash.clone'
import isEmpty from 'lodash.isempty'

type Props = {
  word: string
  onSearch: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const SearchBox: FC<Props> = ({ word, onSearch }) => {
  const protectedOnSearch: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    const value = clone(e.target.value)
    if (!isEmpty(value.trim())) {
      onSearch(e)
    }
  }

  return (
    <TextField
      label="Search"
      value={word}
      data-test="search"
      onChange={protectedOnSearch}
      margin="normal"
      variant="outlined"
    />
  )
}
