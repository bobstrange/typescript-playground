export default function handler(req, res) {
  const loggedIn = Boolean(req.cookies && req.cookies['gatsby-auth'])
  res.json({ loggedIn })
}
