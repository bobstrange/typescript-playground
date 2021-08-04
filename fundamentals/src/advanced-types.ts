import { HasEmail, HasPhoneNumber } from './types'

// mapped type

interface CommunicationMethods {
  email: HasEmail
  phone: HasPhoneNumber
  fax: { fax: string }
}

function contact<K extends keyof CommunicationMethods>(
  method: K,
  contact: CommunicationMethods[K]
) {
  //
}

contact('email', { name: 'foo', email: 'foo@bar.com' })
contact('phone', { name: 'foo', phoneNumber: '123-456-7890' })
contact('fax', { fax: '123-456-7890' })

type CommunicationMethodKeys = keyof CommunicationMethods
type CommunicationMethodValues = CommunicationMethods[CommunicationMethodKeys]

// type queries example

const resolvedPromiseNum = Promise.resolve(4)
type ResolveType = typeof Promise.resolve
let x: typeof Promise.resolve

x(100).then((num) => num + 1)
