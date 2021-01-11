import { getGreetMessage } from '../../src/services/hello.service'

describe('hello.service', () => {
  it('returns greeting message with given name', () => {
    const res = getGreetMessage('Bob')
    expect(res).toEqual('Hello Bob, welcome to exciting serverless world')
  })
})
