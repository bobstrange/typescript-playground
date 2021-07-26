import { MongoClient } from 'mongodb'

type initParams = {
  host: string
  port: number
  database: string
  user?: string
  password?: string
}

const connectionURL = ({
  host,
  port,
  database,
  user,
  password,
}: initParams) => {
  let url = 'mongodb://'
  if (user) {
    url += `${user}:${password}@`
  }
  url += `${host}:${port}/${database}`
  return url
}

export const init = async (params: initParams) => {
  const url = connectionURL(params)

  try {
    const client = await MongoClient.connect(url)
    console.log('connection established')
    return client
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  }
}
