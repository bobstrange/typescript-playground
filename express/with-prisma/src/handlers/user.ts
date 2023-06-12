import { Handler } from "express"
import { prismaClient } from "../../db"
import { comparePassword, createJWT, hashPassword } from "../modules/auth"

export const createUser: Handler = async (req, res) => {
  const { username, password } = req.body
  const user = await prismaClient.user.create({
    data: {
      username,
      password: await hashPassword(password),
    },
  })
  const token = createJWT(user)
  res.json({ token })
}

export const signin: Handler = async (req, res) => {
  const { username, password } = req.body
  const user = await prismaClient.user.findUnique({
    where: {
      username,
    },
  })
  if (!user) {
    res.status(401)
    res.json({ message: "Cannot login" })
    return
  }
  const isValid = await comparePassword(password, user.password)
  if (!isValid) {
    res.status(401)
    res.json({ message: "Cannot login" })
    return
  }
  const token = createJWT(user)
  res.json({ token })
}
