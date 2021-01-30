import { Request, Response, NextFunction } from 'express'
import createHttpError from 'http-errors'
import request from 'supertest'
import { app } from '../../app'
import { errorHandler } from '../error-handler'

describe('errorHandler', () => {
  // super test を使用して、テストをする場合
  // Integration テスト的になっているので、app に他の Handler が定義された結果テストが落ちる可能性がある
  describe('supertest', () => {
    it('returns Not Found error with status code 404 if the given URL does not exist', async () => {
      const response = await request(app).get('/not-exists').expect(404)
      expect(response.body).toEqual({ errors: [{ message: 'Not Found' }] })
    })
  })

  // jest の mock を使用してテストする場合
  // 完全に unit テストになっている
  // コードの記述量は多くなってしまっている
  // handler なので、入力 -> 出力 のテストができない為、res を mock して引数が呼ばれていることの確認になる
  describe('mock', () => {
    let requestMock: Partial<Request>
    let responseMock: Partial<Response>
    const nextMock: NextFunction = jest.fn()

    beforeEach(() => {
      requestMock = {}
      responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
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
      expect(responseMock.status).toHaveBeenCalledWith(httpError.statusCode)
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
      expect(responseMock.status).toHaveBeenCalledWith(400)
      expect(responseMock.json).toHaveBeenCalledWith({
        errors: [{ message: 'Something went wrong' }],
      })
    })
  })
})
