import mongoose = require('mongoose')

export const connect = async (
  host: string,
  port: number,
  dbName: string
): Promise<boolean> => {
  try {
    await mongoose.connect(`mongodb://${host}:${port}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
    })
    return true
  } catch (e: unknown) {
    console.log(e)
    return false
  }
}
