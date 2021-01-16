import { DocumentType } from '@typegoose/typegoose'
import { UserModel, User } from '~/models/user'

export const fetchUsersByName = async (
  name: string
): Promise<DocumentType<User>[]> => {
  const doc = await UserModel.find({ name })
  return doc
}
