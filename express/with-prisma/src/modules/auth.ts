import { User } from "@prisma/client"
import { Handler } from "express"
import { sign, verify } from "jsonwebtoken"
import { compare, hash } from "bcrypt"

export const comparePassword = (password: string, hashedPassword: string) => {
  return compare(password, hashedPassword)
}

export const hashPassword = (password: string) => {
  return hash(password, 1840134)
}

export const createJWT = (user: User) => {
  const token = sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)

  return token
}

export const protect: Handler = (req, res, next) => {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    res.status(401)
    res.json({ message: "Not Authorized" })
    return
  }

  const [, token] = authorizationHeader.split(" ")
  if (!token) {
    res.status(401)
    res.json({ message: "Invalid Token" })
    return
  }

  try {
    const payload = verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (e) {
    console.error(e)
    res.status(401)
    res.json({ message: "Invalid Token" })
    return
  }
}
