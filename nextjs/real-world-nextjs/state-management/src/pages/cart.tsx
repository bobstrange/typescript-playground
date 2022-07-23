import { useContext } from "react"
// eslint-disable-next-line no-unused-vars
import data from "../data/items"
import { CartContext } from "../context/CartContext"

function Cart() {
  const { items } = useContext(CartContext)
  return (
    <div>
      <h1 className="text-xl font-bold"> Total: ${/* To be implemented */} </h1>
      <div>
        {[
          /* To be implemented */
        ].map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
