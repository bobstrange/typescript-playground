import { useGlobalItems } from "../hooks/useGlobalItems"
import data from "../data/items"

function getItem(id: string) {
  return data.find((item) => item.id === id)
}

function Cart() {
  const items = useGlobalItems()
  const amounts = Object.entries(items).map(([id, amount]) => {
    const item = getItem(id)
    return { item, amount }
  })
  const total = amounts
    .map((item) => item.amount)
    .reduce((acc, curr) => {
      return acc + curr
    }, 0)
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
