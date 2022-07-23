import { useContext } from "react"
import { CartContext } from "../context/CartContext"

type Props = {
  id: string
  name: string
  picture: string
  price: number
}

// eslint-disable-next-line no-unused-vars
const ProductCard: React.FC<Props> = ({ id, name, price, picture }) => {
  const { items, setItems } = useContext(CartContext)
  const productAmount = id in items ? items[id] : 0
  const handleAmount = (action) => {
    switch (action) {
      case "increment":
        const newItemAmount = id in items ? items[id] + 1 : 1
        setItems({ ...items, [id]: newItemAmount })
        break
      case "decrement":
        if (items?.[id] > 0) {
          setItems({ ...items, [id]: items[id] - 1 })
        }
        break
      default:
        break
    }
  }

  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <div className="relative 100% h-40 m-auto">
        <img src={picture} alt={name} className="object-cover" />
      </div>
      <div className="flex justify-between mt-4">
        <div className="font-bold text-l"> {name} </div>
        <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
      </div>
      <div className="flex justify-between mt-4 w-2/4 m-auto">
        <button
          className="pl-2 pr-2 bg-red-400 text-white rounded-md"
          disabled={productAmount === 0}
          onClick={() => handleAmount("decrement")}
        >
          -
        </button>
        <div>{productAmount}</div>
        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => handleAmount("increment")}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCard
