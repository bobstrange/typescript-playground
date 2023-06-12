import { User } from "@prisma/client"
import { Handler } from "express"
import { sign } from "jsonwebtoken"

export const createJWT = (user: User) => {
  const token = sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)

  return token
}

export const protect: Handler = (req, res) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({ message: "Not Authorized" })
    return
  }
}
