import mongoose from 'mongoose'
import { database } from './keys'

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(database.url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    console.log(`MongoDB connected, ${connect.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}
