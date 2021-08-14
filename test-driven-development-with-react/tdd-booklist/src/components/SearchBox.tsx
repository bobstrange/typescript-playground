import React, { FC } from 'react'
import { TextField } from '@material-ui/core'

type Props = {
  word: string
  onSearch: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const SearchBox: FC<Props> = ({ word, onSearch }) => {
  return (
    <TextField
      label="Search"
      value={word}
      data-test="search"
      onChange={onSearch}
      margin="normal"
      variant="outlined"
    />
  )
}
