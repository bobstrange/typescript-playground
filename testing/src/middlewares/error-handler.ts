import { ErrorRequestHandler } from 'express'
import { isHttpError } from 'http-errors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
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
