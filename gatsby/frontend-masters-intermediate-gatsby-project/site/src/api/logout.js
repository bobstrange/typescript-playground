export default function handler(_, res) {
  res.setHeader(
    'Set-Cookie',
    'gatsby-auth=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
  )
  res.json({ status: 'ok' })
}
