import { createContext } from "react"

type Items = { [k in string]: number }
export const CartContext = createContext<{
  items: Items
  setItems: (items: Items) => null
}>({
  items: {},
  setItems: (items) => null,
})
