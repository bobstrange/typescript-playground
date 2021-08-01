import { HasEmail, HasPhoneNumber } from './types'

interface IContactMessenger {
  (contact: HasEmail | HasPhoneNumber, message: string): void
}

type ContactMessenger = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void

interface ContactConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber
}

type ContactConstructor1 = new (...args: any[]) => HasEmail | HasPhoneNumber
