import { RequestHandler, Router } from 'express'

const router = Router()

const homeHandler: RequestHandler = async (req, res) => {
  res.json({
    data: 'Hi there',
  })
}

router.get('/', homeHandler)

export { router as HomeRouter }
