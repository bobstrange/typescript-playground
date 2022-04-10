import { FC, PropsWithChildren } from 'react'

type Props = {
  imageURL: string
  description: string
  attribution: string
}
export const CarouselSlide: FC<PropsWithChildren<Props>> = ({
  imageURL,
  description,
  attribution,
}) => {
  return (
    <figure>
      <img src={imageURL} />
      <figcaption>{`${description} ${attribution}`}</figcaption>
    </figure>
  )
}
