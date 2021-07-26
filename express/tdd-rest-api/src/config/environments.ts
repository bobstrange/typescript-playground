import dotenv from 'dotenv'
dotenv.config()

export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 27017
export const DB_NAME = process.env.DB_NAME || 'dev_customers'
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
