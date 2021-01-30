import { ErrorRequestHandler } from 'express'
import { isHttpError } from 'http-errors'

export const errorHandler: ErrorRequestHandler = (err, _req, res) => {
  if (isHttpError(err)) {
    res.status(err.statusCode).json({
      errors: [{ message: err.message }],
    })
    return
  }
  // res.statusCode = 400
  res.status(400).json({
    errors: [{ message: 'Something went wrong' }],
  })
}
