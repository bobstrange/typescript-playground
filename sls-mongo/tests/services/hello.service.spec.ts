import { fetchUsersByName } from '~/services/user.service'

describe('hello.service', () => {
  it('returns greeting message with given name', () => {
    const res = fetchUsersByName('Bob')
    expect(res).toEqual('Hello Bob, welcome to exciting serverless world')
  })
})
