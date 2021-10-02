import React from 'react'

type Props = {
  title: string
  activeClass: string
  callback: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<Props> = ({ title, activeClass, callback }) => {
  return (
    <button className={activeClass} onClick={callback}>
      {title}
    </button>
  )
}
