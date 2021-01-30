import { Request, Response, NextFunction } from 'express'
import { isHttpError } from 'http-errors'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (isHttpError(err)) {
    res.statusCode = err.statusCode
    return res.json({
      errors: [{ message: err.message }],
    })
  }
  res.statusCode = 400
  res.json({
    errors: [{ message: 'Something went wrong' }],
  })
}
