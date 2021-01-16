import { getModelForClass, prop } from '@typegoose/typegoose'

export class User {
  @prop()
  public name?: string
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    id: true,
    versionKey: false,
  },
})
