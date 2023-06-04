import { ChangeEventHandler } from 'react'

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Agreement = ({ onChange }: Props) => {
  return (
    <fieldset>
      <legend>ToS Agreement</legend>
      <label>
        <input type="checkbox" onChange={onChange} />
        Agree <a href="">term of service</a>.
      </label>
    </fieldset>
  )
}
