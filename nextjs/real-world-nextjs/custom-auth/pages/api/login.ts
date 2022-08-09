import { NextApiHandler } from "next"
import { serialize } from "cookie"
import { encode } from "../../lib/jwt"

function authenticateUser(email: string, password: string) {
  const validEmail = "johndoe@foo.bar.com"
  const validPassword = "jD123456"

  if (email === validEmail && password === validPassword) {
    return encode({
      id: "1",
      name: "John Doe",
      email: "johndoe@foo.bar.com",
    })
  }
}

const LoginHandler: NextApiHandler = (req, res) => {
  const { method } = req
  const { email, password } = req.body

  if (method !== "POST") {
    return res.status(404).end()
  }

  if (!email || !password) {
    return res.status(400).json({
      error: "Missing required params",
    })
  }

  const user = authenticateUser(email, password)
  if (user) {
    res.setHeader(
      "Set-Cookie",
      serialize("my-auth", user, { path: "/", httpOnly: true })
    )
    return res.json({ success: true })
  }
  return res.status(401).json({
    success: false,
    error: "Wrong email or password",
  })
}

export default LoginHandler
