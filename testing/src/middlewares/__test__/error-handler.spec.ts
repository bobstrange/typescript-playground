import { Request, Response, NextFunction } from 'express'
import createHttpError from 'http-errors'
import request from 'supertest'
import { app } from '../../app'
import { errorHandler } from '../error-handler'

describe('errorHandler', () => {
  describe('supertest', () => {
    it('returns Not Found error with status code 404 if the given URL does not exist', async () => {
      const response = await request(app).get('/not-exists').expect(404)
      expect(response.body).toEqual({ errors: [{ message: 'Not Found' }] })
    })
  })

  describe('mock', () => {
    let requestMock: Partial<Request>
    let responseMock: Partial<Response>
    const nextMock: NextFunction = jest.fn()

    beforeEach(() => {
      requestMock = {}
      responseMock = {
        json: jest.fn(),
      }
    })

    it('When the error is HttpError, it returns appropriate error message', () => {
      const httpError = new createHttpError.Forbidden()
      errorHandler(
        httpError,
        requestMock as Request,
        responseMock as Response,
        nextMock
      )
      expect(responseMock.json).toHaveBeenCalledWith({
        errors: [{ message: httpError.message }],
      })
    })

    it('When the error is not HttpError, it returns Something went wrong message', () => {
      const error = new Error('Woops')
      errorHandler(
        error,
        requestMock as Request,
        responseMock as Response,
        nextMock
      )
      expect(responseMock.json).toHaveBeenCalledWith({
        errors: [{ message: 'Something went wrong' }],
      })
    })
  })
})
