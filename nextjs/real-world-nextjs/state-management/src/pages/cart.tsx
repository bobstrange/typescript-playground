import { useContext } from "react"
// eslint-disable-next-line no-unused-vars
import data from "../data/items"
import { CartContext } from "../context/CartContext"

function getItem(id: string) {
  const index = data.findIndex((item) => item.id === id)
  return data[index]
}

function Cart() {
  const { items } = useContext(CartContext)
  const total = Object.entries(items)
    .map(([id, amount]) => {
      return getItem(id).price * amount
    })
    .reduce((acc, curr) => acc + curr, 0)
  const amounts = Object.entries(items).map(([id, amount]) => {
    const item = getItem(id)
    return { item, amount }
  })

  return (
    <div>
      <h1 className="text-xl font-bold"> Total: ${total} </h1>
      <div>
        {amounts.map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
