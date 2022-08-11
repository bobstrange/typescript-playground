import { NextApiHandler } from "next"
import { parse } from "cookie"
import { decode } from "../../lib/jwt"

const GetSessionHandler: NextApiHandler = (req, res) => {
  const { method } = req

  if (method !== "POST") {
    return res.status(404).end()
  }

  const { my_auth } = parse(req.headers.cookie || "")

  if (!my_auth) {
    return res.json({ loggedIn: false })
  }

  return res.json({
    loggedIn: true,
    user: decode(my_auth),
  })
}

export default GetSessionHandler
