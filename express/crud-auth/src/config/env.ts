import dotenv from 'dotenv'
dotenv.config()

export const PORT = parseInt(process.env.PORT || '3000', 10)

const auth0Audience = process.env.AUTH0_AUDIENCE
const auth0Domain = process.env.AUTH0_DOMAIN

if (!(auth0Audience && auth0Domain)) {
  throw new Error('Please set both AUTH0_AUDIENCE and AUTH0_DOMAIN')
}

export const AUTH0_AUDIENCE = auth0Audience
export const AUTH0_DOMAIN = auth0Domain
