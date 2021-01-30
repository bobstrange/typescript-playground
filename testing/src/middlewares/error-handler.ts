import { Request, Response, NextFunction } from 'express'
import { isHttpError } from 'http-errors'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (isHttpError(err)) {
    return res.status(err.statusCode).json({
      errors: [{ message: err.message }],
    })
  }
  // res.statusCode = 400
  res.status(400).json({
    errors: [{ message: 'Something went wrong' }],
  })
}
