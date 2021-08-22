import { Request, Response, NextFunction, response } from 'express'
import { HttpError } from '../common/http-error'

export const ErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode || err.status || 500
  response.status(status).json({ errors: [err.message] })
}
