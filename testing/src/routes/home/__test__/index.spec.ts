import request from 'supertest'
import { app } from '../../../app'

describe('HomeRouter', () => {
  it('returns status code 200', async () => {
    await request(app).get('/').expect(200)
  })

  it('returns', async () => {
    const response = await request(app).get('/')
    expect(response.body).toEqual({ data: 'Hi there' })
  })
})
