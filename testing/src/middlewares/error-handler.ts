import { Request, Response, NextFunction } from 'express'
import { isHttpError } from 'http-errors'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (isHttpError(err)) {
    return res.status(err.status).send({
      errors: [{ message: err.message }],
    })
  }
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  })
}
