import axios from "axios"
import { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
  const id = req.query.id
  if (!id) {
    res.status(400).json({ error: "Missing id" })
    return
  }
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  res.status(200).json(response.data)
}

export default handler
