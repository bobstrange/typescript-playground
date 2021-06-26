import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  res.setPreviewData({})
  res.redirect(req.query.route)
}

export default handler
