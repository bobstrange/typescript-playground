import { FC, PropsWithChildren } from 'react'

type Props = {
  imageURL: string
  description: string
  attribution?: string
}
export const CarouselSlide: FC<PropsWithChildren<Props>> = ({
  imageURL,
  description,
  attribution,
  ...rest
}) => {
  return (
    <figure {...rest}>
      <img src={imageURL} />
      <figcaption>
        <strong>{description}</strong>
        {attribution}
      </figcaption>
    </figure>
  )
}
