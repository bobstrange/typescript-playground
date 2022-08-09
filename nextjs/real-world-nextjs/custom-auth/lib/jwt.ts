import jwt from "jsonwebtoken"
const JWT_SECRET = "something secure"

export function encode(payload: Object) {
  return jwt.sign(payload, JWT_SECRET)
}

export function decode(token: string) {
  return jwt.verify(token, JWT_SECRET)
}
