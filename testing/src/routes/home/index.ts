import express, { Request, Response, Router } from 'express'

const router = Router()

const homeHandler = async (req: Request, res: Response) => {
  res.json({
    data: 'Hi there',
  })
}

router.get('/', homeHandler)

export { router as HomeRouter }
