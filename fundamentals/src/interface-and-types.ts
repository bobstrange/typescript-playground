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

interface PhoneNumberDict {
  [numberName: string]:
    | undefined
    | {
        areaCode: string
        num: number
      }
}

const d: PhoneNumberDict = {}
const phoneDict: PhoneNumberDict = {
  home: { areaCode: '123', num: 123 },
  office: { areaCode: '456', num: 456 },
  iphone: { areaCode: '789', num: 789 },
}

// Declaration merge
interface PhoneNumberDict {
  home: {
    areaCode: string
    num: number
  }
  office: {
    areaCode: string
    num: number
  }
}

phoneDict.home
phoneDict.office
phoneDict.mobile // undefined | { areaCode: string, num: number }
