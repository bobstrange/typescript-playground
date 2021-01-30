import request from 'supertest'
import { app } from '../../app'

describe('errorHandler', () => {
  it('returns Not Found error with status code 404 if the given URL does not exist', async () => {
    const response = await request(app).get('/not-exists').expect(404)
    expect(response.body).toEqual({ errors: [{ message: 'Not Found' }] })
  })
})
