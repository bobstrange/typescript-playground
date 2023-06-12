import { Handler } from "express"
import { prismaClient } from "../../db"
import { createJWT, hashPassword } from "../modules/auth"

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
