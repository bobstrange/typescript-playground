export default function handler(_, res) {
  res.setHeader('Set-Cookie', 'gatsby-auth=true; path=/;')
  res.json({ status: 'ok' })
}
