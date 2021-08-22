export type ItemDTO = {
  name: string
  price: number
  description: string
  image: string
}

export type Item = ItemDTO & {
  id: number
}

export type Items = {
  [key: number]: Item | undefined
}
