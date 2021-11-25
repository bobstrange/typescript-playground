import { FC } from 'react'

type ChildProps = {
  color: string
  onClick: () => void
}

export const Child: FC<ChildProps> = ({ color, onClick }) => {
  return (
    <>
      <div>Child Component color: {color}</div>
      <button onClick={onClick}>Click Me</button>
    </>
  )
}
