import 'source-map-support/register'
import 'reflect-metadata'

import type { ValidatedEventAPIGatewayProxyEvent } from '~libs/apiGateway'
import { formatJSONResponse } from '~libs/apiGateway'
import { mongoConnectionMiddleware, middyfy } from '~libs/lambda'

import schema from './schema'

import { ensureConnection, DBSession } from '~/libs/dbConnection'
import {
  Type,
  Exclude,
  plainToClass,
  Expose,
  classToPlain,
} from 'class-transformer'

const session: DBSession = {}

const photoInput = {
  id: 'photo-01',
  name: 'photo 01',
  description: 'about photo',
  test_snake_case: 'Test',
  tags: ['bike', 'mountain'],
  author: {
    id: 'author-01',
    first_name: 'John',
    last_name: 'Doe',
  },
  albums: [
    {
      id: '1',
      name: 'My life',
    },
    {
      id: '2',
      name: 'My young years',
    },
  ],
}
export class Album {
  id!: string

  @Exclude()
  name!: string

  @Type(() => Photo)
  photos!: Photo[]
}
export class User {
  @Type(() => String)
  id!: number

  @Expose({ name: 'first_name' })
  firstName!: string

  @Expose({ name: 'last_name' })
  lastName!: string

  @Type(() => Date)
  registrationDate!: Date
}

export class Photo {
  id!: string

  filename!: string

  description!: string

  tags!: string[]

  @Type(() => User)
  author!: User

  @Type(() => Album)
  albums!: Album[]

  @Expose({ name: 'test_snake_case' })
  testSnakeCase!: string

  get name() {
    return this.id + '_' + this.filename
  }

  getAlbums() {
    console.log('this is not serialized/deserialized')
    return this.albums
  }
}

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  await ensureConnection(session)
  const db = session.client?.db('dev')

  const photo = plainToClass(Photo, photoInput)
  console.log('deserialized: ', photo)

  const plain = classToPlain(photo)
  console.log('serialized: ', plain)
  const users = await db
    ?.collection('users')
    .find({
      name: event.body.name,
    })
    .toArray()
  return formatJSONResponse({
    users,
  })
}

export const main = middyfy(hello).use(
  mongoConnectionMiddleware({
    session,
    stg: 'dev',
  })
)
