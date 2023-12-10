import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { Pool } from 'pg'
import type { User } from '@/app/lib/definitions'
import bcrypt from 'bcrypt'

const pool = new Pool({ connectionString: process.env.POSTGRES_URL })

async function getUser(email: string): Promise<User | undefined> {
  try {
    const client = await pool.connect()
    const user = await client.query<User>(
      `
      SELECT * FROM users WHERE email=$1
    `,
      [email],
    )
    client.release()
    return user.rows[0]
  } catch (error) {
    console.error('Failed to get user', error)
    throw new Error('Failed to get user')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(8),
          })
          .safeParse(credentials)
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) return user
        }
        console.log('Invalid credentials')
        return null
      },
    }),
  ],
})
