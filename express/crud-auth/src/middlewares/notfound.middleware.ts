// src/middleware/not-found.middleware.ts

import { Request, Response, NextFunction } from 'express'

export const NotFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const message = 'Not found'

  response.status(404).send(message)
}
