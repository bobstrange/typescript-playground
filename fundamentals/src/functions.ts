import { HasEmail, HasPhoneNumber } from './types'

function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} <${to.email}>`,
    body: 'Whatever comes here',
  }
}

function sendTextMessage(to: HasPhoneNumber): {
  recipient: string
  body: string
} {
  return {
    recipient: `${to.name} <${to.phone}>`,
    body: "You're pre-qualified for a loan!",
  }
}

function contactPeople(type: 'email', ...people: HasEmail[]): void
function contactPeople(type: 'phone', ...people: HasPhoneNumber[]): void
function contactPeople(
  type: 'email' | 'phone',
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (type === 'email') {
    ;(people as HasEmail[]).forEach(sendEmail)
  } else {
    ;(people as HasPhoneNumber[]).forEach(sendTextMessage)
  }
}

contactPeople('email', { name: 'Foo', email: 'foo@bar.com' })
contactPeople('phone', { name: 'Foo', phoneNumber: '012-345-6789' })

// @ts-expect-error This should be an error
contactPeople('email', { name: 'Foo', phoneNumber: '012-345-6789' })
