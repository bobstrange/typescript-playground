import { useState } from "react"

import Add from "./components/Add"

function App() {
  const [items, setItems] = useState([])

  const handleAdd = (newItem) => {
    setItems((oldItems) => oldItems.concat([newItem]))
  }

  return (
    <>
      <h1>Test Page</h1>
      <Add />
    </>
  )
}

export default App
