import { FC } from 'react'

type ChildProps = {
  color: string
}

export const Child: FC<ChildProps> = ({ color }) => {
  return <div>Child Component color: {color}</div>
}
