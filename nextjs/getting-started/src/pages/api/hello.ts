import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get((req, res) => {
  res.json({ data: 'hi' })
})

export default handler
