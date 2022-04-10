import { FC, PropsWithChildren } from 'react'

export const CarouselButton: FC<PropsWithChildren<Record<string, never>>> = ({
  children,
}) => {
  return <button>{children}</button>
}
